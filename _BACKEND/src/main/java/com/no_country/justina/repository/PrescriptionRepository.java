package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Prescription;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Long>, JpaSpecificationExecutor<Prescription> {

  default Page<Prescription> findByFilters(
          Pageable pageable,
          Long doctorId,
          Long patientId,
          Long specialtyId,
          LocalDateTime start,
          LocalDateTime end
          ){
    return findAll((Root<Prescription> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
      List<Predicate> predicates = new ArrayList<>();
      if (doctorId != null) {
        predicates.add(builder.equal(root.get("doctor").get("id"), doctorId));
      }
      if (patientId != null) {
        predicates.add(builder.equal(root.get("patient").get("idPatient"), patientId));
      }
      if (specialtyId != null) {
        predicates.add(builder.equal(root.get("doctor").get("specialty").get("id"), specialtyId));
      }
      if(start != null && end != null){
        predicates.add(builder.between(root.get("createdAt"), start, end));
      }
      return builder.and(predicates.toArray(new Predicate[0]));
    }, pageable);
  }
}
