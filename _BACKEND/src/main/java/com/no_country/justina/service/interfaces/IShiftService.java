package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Shift;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;
import java.util.List;

public interface IShiftService {
  Shift create(Shift shift);

  List<Shift> createShiftMonth(List<Shift> shifts);

  Shift getById(Long id);
  Page<Shift> getAll(Pageable pageable);
  Shift update(Shift shift);
  void deleteById(Long id);

  List<Shift> getAllByDoctorMonth(long doctorId, int year, int month);

  List<Shift> getAllBySpecialtyMonth(String specialty, int year, int month);

  Page<Shift> getAllByDoctorOrSpecialtyBetweenDates(Pageable pageable,
                                                    Long doctorId,
                                                    Long specialty,
                                                    Integer shiftTime,
                                                    LocalDateTime start,
                                                    LocalDateTime end);
  void updateAppointmentAvailable(long idShift, int quantity);

  Shift getCloserByDoctor();
}
