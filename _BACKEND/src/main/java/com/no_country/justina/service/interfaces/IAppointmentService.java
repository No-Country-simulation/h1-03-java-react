package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Appointment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

public interface IAppointmentService {
  Appointment create(Appointment appointment);
  Appointment getById(Long id);
  Page<Appointment> getAll(Pageable pageable);

  Page<Appointment> getAllByDoctorOrSpecialty(Pageable pageable,
                                              Long doctorId,
                                              String specialty,
                                              LocalDateTime start,
                                              LocalDateTime end);

  Appointment update(Appointment appointment);

  Appointment reschedule(Appointment appointment);

  @Transactional
  Appointment cancel(Long id);

  void deleteById(Long id);
}
