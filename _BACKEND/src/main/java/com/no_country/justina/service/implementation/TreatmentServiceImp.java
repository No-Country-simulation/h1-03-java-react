package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.TreatmentException;
import com.no_country.justina.model.entities.*;
import com.no_country.justina.repository.TreatmentRepository;
import com.no_country.justina.service.interfaces.*;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class TreatmentServiceImp implements ITreatmentService {
  private final TreatmentRepository treatmentRepo;
  private final IDoctorService doctorService;
  private final IMedicalHistoryService historyService;
  private final IAppointmentService appointmentService;

  @Override
  public Treatment create(Treatment treatment) {
    var userTarget = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    Doctor currentDoctor = doctorService.getByUserId(userTarget.getId());

    Specialty currentSpecialty = currentDoctor.getSpecialty();
    Appointment targetAppointment = this.appointmentService.getById(treatment.getAppointment().getId());
    this.verifyDoctorAuthIsSameDoctorAppointment(targetAppointment, currentDoctor);
    MedicalHistory history = this.historyService.getByPatientId(targetAppointment.getPatient().getIdPatient());

    treatment.setDoctor(currentDoctor);
    treatment.setMedicalHistory(history);
    treatment.setSpecialty(currentSpecialty);
    return this.treatmentRepo.save(treatment);
  }

  @Override
  public Treatment getById(Long id) {
    return this.treatmentRepo.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Tratamiento no encontrado, id:"+id));
  }
  @Override
  public Page<Treatment> getByHistorieForPatient(Pageable pageable,
                                                 Long doctorId,
                                                 Long specialtyId,
                                                 LocalDateTime start,
                                                 LocalDateTime end){
    MedicalHistory currentHistoryPatient = this.historyService.getByCurrentPatient();
    return this.getAllByFilters(pageable, doctorId, currentHistoryPatient.getId(), specialtyId,start, end);
  }
  @Override
  public Page<Treatment> getByHistorieForDoctor(Long  id, Pageable pageable){
    return this.treatmentRepo.findByMedicalHistory_Id(id, pageable);
  }

  @Override
  public Page<Treatment> getAll(Pageable pageable) {
    return this.treatmentRepo.findAll(pageable);
  }

  @Override
  public Page<Treatment> getAllByFilters(Pageable pageable,
                                         Long doctorId,
                                         Long historyId,
                                         Long specialtyId,
                                         LocalDateTime start,
                                         LocalDateTime end){
    if(start != null && end != null){
      if(start.isAfter(end)){
        throw new IllegalArgumentException("Horario invalido, la fecha de inicio debe ser menor a la termino.");
      }
    }
    return this.treatmentRepo.findByFilters(pageable, doctorId, historyId, specialtyId, start, end);
  }

  @Override
  public Treatment update(Treatment treatment) {
    this.verifyTreatmentExist(treatment.getId());
    return this.treatmentRepo.save(treatment);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyTreatmentExist(id);
    this.treatmentRepo.deleteById(id);
  }

  private void verifyTreatmentExist(long id){
    boolean exist = this.treatmentRepo.existsById(id);
    if(!exist) throw new EntityNotFoundException("Tratamiento no encontrado, id: "+id);
  }
  private void verifyDoctorAuthIsSameDoctorAppointment(Appointment appointment, Doctor doctorAuth){
    Doctor shiftDoctor = appointment.getShift().getDoctor();
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
