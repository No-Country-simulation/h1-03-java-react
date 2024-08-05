package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.model.entities.Shift;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface ShiftRepository extends JpaRepository<Shift, Long>, JpaSpecificationExecutor<Shift> {

  @Query("SELECT s FROM Shift s WHERE s.doctor.id = :id AND YEAR(s.startDate) = :year AND MONTH(s.startDate) = :month ORDER BY s.startDate ASC")
  List<Shift> findByDoctorAndMonth(Long id, int year, int month);

  @Query("SELECT s FROM Shift s WHERE s.doctor.id = :id AND YEAR(s.startDate) = :year AND MONTH(s.startDate) = :month AND DAY(s.startDate) = :day")
  List<Shift> findByDayAndDoctor(Long id, int year, int month, int day);

  @Query("SELECT s FROM Shift s WHERE s.specialty.name = :specialty AND YEAR(s.startDate) = :year AND MONTH(s.startDate) = :month")
  List<Shift> findBySpecialtyAndMonth(String specialty, int year, int month);

  @Query("SELECT s FROM Shift s WHERE s.endDate > :time AND s.doctor.id = :doctorId " +
          "ORDER BY s.endDate ASC")
  List<Shift> getCloseByDoctorAndDate(long doctorId, LocalDateTime time);

  @Transactional
  @Modifying
  @Query("update Shift s set s.appointment = s.appointment - :quantity where s.id = :id")
  int updateAppointmentShift(long id, int quantity);

  default Page<Shift> findAllByDoctorOrSpecialty(Pageable pageable,
                                                 Long doctorId,
                                                 Long specialtyId,
                                                 Integer shiftTime,
                                                 LocalDateTime start,
                                                 LocalDateTime end,
                                                 List<LocalDateTime> excludedDates,
                                                 Integer minAppointmentAvailable) {
    return findAll((Root<Shift> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
      List<Predicate> predicates = new ArrayList<>();
      if (doctorId != null) {
        predicates.add(builder.equal(root.get("doctor").get("id"), doctorId));
      }
      if (specialtyId != null) {
        predicates.add(builder.equal(root.get("specialty").get("id"), specialtyId));
      }
      if (start != null && end != null) {
        predicates.add(builder.between(root.get("startDate"), start, end));
      }
      if (shiftTime != null) {
        if (shiftTime == 0) {
          predicates.add(builder.equal(builder.function("HOUR", Integer.class, root.get("startDate")), 7));
        }
        else {
          predicates.add(builder.equal(builder.function("HOUR", Integer.class, root.get("startDate")), 13));
        }
      }
      if (excludedDates != null && !excludedDates.isEmpty()) {
        Predicate[] exclusionPredicates = excludedDates.stream()
                .map(date -> builder.notEqual(root.get("startDate"), date))
                .toArray(Predicate[]::new);
        predicates.add(builder.and(exclusionPredicates));
      }
      if(minAppointmentAvailable != null){
        predicates.add(builder.greaterThanOrEqualTo(root.get("appointment"), minAppointmentAvailable));
      }

      return builder.and(predicates.toArray(new Predicate[0]));
    }, pageable);
  }
}
