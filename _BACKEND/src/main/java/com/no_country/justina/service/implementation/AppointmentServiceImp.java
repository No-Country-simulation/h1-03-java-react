package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.repository.AppointmentRepository;
import com.no_country.justina.service.interfaces.IAppointmentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImp implements IAppointmentService {
  private final AppointmentRepository appointmentRepo;

  @Override
  public Appointment create(Appointment appointment) {
    return this.appointmentRepo.save(appointment);
  }

  @Override
  public Appointment getById(Long id) {
    return this.appointmentRepo.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Cita no encontrada, id: "+id));
  }

  @Override
  public Page<Appointment> getAll(Pageable pageable) {
    return this.appointmentRepo.findAll(pageable);
  }

  @Override
  public Appointment update(Appointment appointment) {
    this.verifyAppointmentExist(appointment.getIdAppointment());
    return this.appointmentRepo.save(appointment);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyAppointmentExist(id);
    this.appointmentRepo.deleteById(id);
  }

  private void verifyAppointmentExist(long id){
    boolean exist = this.appointmentRepo.existsById(id);
    if(!exist) throw new EntityNotFoundException("Tratamiento no encontrado, id: "+id);
  }
}
