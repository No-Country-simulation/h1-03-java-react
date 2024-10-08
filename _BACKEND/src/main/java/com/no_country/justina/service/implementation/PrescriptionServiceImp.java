package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.TreatmentException;
import com.no_country.justina.model.entities.*;
import com.no_country.justina.repository.PrescriptionRepository;
import com.no_country.justina.service.interfaces.IDoctorService;
import com.no_country.justina.service.interfaces.IMedicalHistoryService;
import com.no_country.justina.service.interfaces.IPrescriptionService;
import com.no_country.justina.service.interfaces.ITreatmentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PrescriptionServiceImp implements IPrescriptionService {
  private final ITreatmentService treatmentService;
  private final IMedicalHistoryService historyService;
  private final PrescriptionRepository prescriptionRepository;
  private final IDoctorService doctorService;

  @Override
  public Prescription create(Prescription prescription) {
    Treatment treatment = treatmentService.getById(prescription.getTreatment().getId());

    this.verifyDoctorAuthIsSameDoctorAppointment(treatment);
    prescription.setDoctor(treatment.getDoctor());
    prescription.setPatient(treatment.getMedicalHistory().getPatient());
    prescription.setSpecialty(treatment.getSpecialty());
    return this.prescriptionRepository.save(prescription);
  }

  @Override
  public Prescription getById(Long id) {
    return this.prescriptionRepository.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Prescripción no encontrada, id:"+id));
  }

  @Override
  public Page<Prescription> getAll(Pageable pageable) {
    return this.prescriptionRepository.findAll(pageable);
  }

  @Override
  public Page<Prescription> getAllFilters(Pageable pageable,
                                          Long doctorId,
                                          Long patientId,
                                          Long specialtyId,
                                          LocalDateTime start,
                                          LocalDateTime end) {
    if(start != null && end != null){
      if(!(start.isBefore(end))){
        throw new IllegalArgumentException("La fecha de inicio debe ser antes de la fecha de termino.");
      }
    }
    return this.prescriptionRepository.findByFilters(pageable, doctorId, patientId, specialtyId ,start, end);
  }

  @Override
  public Prescription update(Prescription prescription) {
    this.verifyPrescriptionExist(prescription.getId());
    return this.prescriptionRepository.save(prescription);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyPrescriptionExist(id);
    this.prescriptionRepository.deleteById(id);
  }

  @Override
  public Page<Prescription> getAllCurrent(Pageable pageable,
                                          Long doctorId,
                                          Long specialtyId,
                                          LocalDateTime start,
                                          LocalDateTime end) {
    MedicalHistory current = this.historyService.getByCurrentPatient();
    if(start != null && end != null){
      if(!(start.isBefore(end))){
        throw new IllegalArgumentException("La fecha de inicio debe ser antes de la fecha de termino.");
      }
    }
    return this.prescriptionRepository.findByFilters(pageable,
            doctorId,
            current.getPatient().getIdPatient(),
            specialtyId,
            start,
            end
            );
  }

  private void verifyPrescriptionExist(long id){
    boolean exist = this.prescriptionRepository.existsById(id);
    if(!exist) throw new EntityNotFoundException("Prescripción no encontrada, id:"+id);
  }

  private void verifyDoctorAuthIsSameDoctorAppointment(Treatment treatment){
    var userTarget = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    Doctor doctorAuth = doctorService.getByUserId(userTarget.getId());

    Doctor shiftDoctor = treatment.getAppointment().getShift().getDoctor();
    if(shiftDoctor.getId().equals(doctorAuth.getId())){
      return;
    }
    else {
      throw new TreatmentException("El doctor autenticado es diferente al doctor del turno." +
              " doctor autenticado id: "+doctorAuth.getId()+
              " doctor del turno id: "+shiftDoctor.getId());
    }
  }
}
