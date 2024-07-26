package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Specialty;
import com.no_country.justina.model.entities.Treatment;
import com.no_country.justina.repository.TreatmentRepository;
import com.no_country.justina.service.interfaces.IAppointmentService;
import com.no_country.justina.service.interfaces.ITreatmentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class TreatmentServiceImp implements ITreatmentService {
  private final TreatmentRepository treatmentRepo;
  private final IAppointmentService appointmentService;

  @Override
  public Treatment create(Treatment treatment) {
    Appointment currentAppointment = this.appointmentService.getById(treatment.getAppointment().getId());
    this.appointmentService.updateToSuccessAppointment(currentAppointment.getId());
    Doctor currentDoctor = currentAppointment.getShift().getDoctor();
    Specialty currentSpecialty = currentAppointment.getShift().getSpecialty();
    treatment.setDoctor(currentDoctor);
    treatment.setSpecialty(currentSpecialty);
    return this.treatmentRepo.save(treatment);
  }

  @Override
  public Treatment getById(Long id) {
    return this.treatmentRepo.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Tratamiento no encontrado, id:"+id));
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
}
