package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Appointment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAppointmentService {
  Appointment create(Appointment appointment);
  Appointment getById(Long id);
  Page<Appointment> getAll(Pageable pageable);

  List<Appointment> getByShift(long shiftId);

  Appointment update(Appointment appointment);
  void deleteById(Long id);
}
