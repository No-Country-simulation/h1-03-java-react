package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.model.entities.Prescription;
import com.no_country.justina.model.entities.Treatment;
import com.no_country.justina.repository.PrescriptionRepository;
import com.no_country.justina.service.interfaces.IPrescriptionService;
import com.no_country.justina.service.interfaces.ITreatmentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PrescriptionServiceImp implements IPrescriptionService {
  private final ITreatmentService treatmentService;
  private final PrescriptionRepository prescriptionRepository;

  @Override
  public Prescription create(Prescription prescription) {
    Treatment treatment = treatmentService.getById(prescription.getTreatment().getId());
    Appointment appointment = treatment.getAppointment();
    prescription.setDoctor(appointment.getShift().getDoctor());
    prescription.setPatient(appointment.getPatient());
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
      if(start.isBefore(end)){
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

  private void verifyPrescriptionExist(long id){
    boolean exist = this.prescriptionRepository.existsById(id);
    if(!exist) throw new EntityNotFoundException("Prescripción no encontrada, id:"+id);
  }
}
