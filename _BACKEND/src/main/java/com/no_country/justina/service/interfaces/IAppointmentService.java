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
                                              Long specialtyId,
                                              Long patientId,
                                              Integer status,
                                              LocalDateTime start,
                                              LocalDateTime end);

  Page<Appointment> getAllByFiltersForAuthUser(Pageable pageable,
                                               Long doctorId,
                                               Long specialty,
                                               Integer status,
                                               LocalDateTime start,
                                               LocalDateTime end);

  Appointment update(Appointment appointment);

  Appointment reschedule(Appointment appointment);

  @Transactional
  Appointment cancelAppointment(Long id);

  @Transactional
  Appointment missingAppointment(Appointment appointment);

  @Transactional
  Appointment updateToSuccessAppointment(Long id);

  void deleteById(Long id);

  List<Appointment> getByShift(long id);

  Appointment getCloseByCurrentUser();
}
