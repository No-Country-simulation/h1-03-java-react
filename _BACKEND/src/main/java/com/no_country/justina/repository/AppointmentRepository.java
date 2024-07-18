package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Shift;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

  @Query("select a from Appointment a where a.patient.id = :patientId and DATE(a.date) = :date")
  List<Appointment> getAllByDayAndPatient(long patientId, LocalDate date);

  @Query("select a from Appointment a where a.shift = ?1")
  List<Appointment> findByShift(Shift shift);

  @Query("select a from Appointment a where a.shift.doctor = ?1 and a.date = ?2")
  List<Appointment> findByShift_Doctor(Doctor doctor, LocalDateTime date);


}
