package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Shift;
import com.no_country.justina.model.enums.AppointmentStatus;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>, JpaSpecificationExecutor<Appointment> {

  @Query("select a from Appointment a where a.patient.id = :patientId and DATE(a.date) = :date")
  List<Appointment> getAllByDayAndPatient(long patientId, LocalDate date);



  @Transactional
  @Modifying
  @Query("update Appointment a set a.appointmentStatus = ?1 where a.id = ?2")
  int updateAppointmentStatus(AppointmentStatus appointmentStatus, long idAppointment);

  default Page<Appointment> findAllByDoctorOrSpecialty(Pageable pageable,
                                                       Long doctorId,
                                                       Long specialtyId,
                                                       Long patientId,
                                                       AppointmentStatus status,
                                                       LocalDateTime start,
                                                       LocalDateTime end) {
    return findAll((Root<Appointment> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
      List<Predicate> predicates = new ArrayList<>();
      if (doctorId != null) {
        predicates.add(builder.equal(root.get("shift").get("doctor").get("id"), doctorId));
      }
      if (patientId != null) {
        predicates.add(builder.equal(root.get("patient").get("idPatient"), patientId));
      }
      if (specialtyId != null) {
        predicates.add(builder.equal(root.get("shift").get("specialty").get("id"), specialtyId));
      }
      if (status != null) {
        predicates.add(builder.equal(root.get("appointmentStatus"), status));
      }
      if(start != null && end != null){
        predicates.add(builder.between(root.get("date"), start, end));
      }
//      predicates.add(builder.between(root.get("date"), start, end));
      return builder.and(predicates.toArray(new Predicate[0]));

    }, pageable);
  }

  List<Appointment> findByShift_Id(long id);
}
