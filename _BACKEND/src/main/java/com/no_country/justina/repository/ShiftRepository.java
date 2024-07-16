package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Shift;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ShiftRepository extends JpaRepository<Shift, Long> {

  @Query("SELECT s FROM Shift s WHERE s.doctor.id = :id AND YEAR(s.startDate) = :year AND MONTH(s.startDate) = :month ORDER BY s.startDate ASC")
  List<Shift> findByDoctorAndMonth(Long id, int year, int month);

  @Query("SELECT s FROM Shift s WHERE s.doctor.id = :id AND YEAR(s.startDate) = :year AND MONTH(s.startDate) = :month AND DAY(s.startDate) = :day")
  List<Shift> findByDayAndDoctor(Long id, int year, int month, int day);

  @Query("SELECT s FROM Shift s WHERE s.specialty.name = :specialty AND YEAR(s.startDate) = :year AND MONTH(s.startDate) = :month")
  List<Shift> findBySpecialtyAndMonth(String specialty, int year, int month);

  @Query("select s from Shift s where s.startDate between ?1 and ?2")
  Page<Shift> findShiftsMonthBetween(LocalDateTime startDateStart, LocalDateTime startDateEnd, Pageable pageable);

}
