package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Treatment;
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
public interface TreatmentRepository extends JpaRepository<Treatment, Long>, JpaSpecificationExecutor<Treatment> {

  default Page<Treatment> findByFilters(
          Pageable pageable,
          Long doctorId,
          Long historyId,
          Long specialtyId,
          LocalDateTime start,
          LocalDateTime end
  ){
    return findAll((Root<Treatment> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
      List<Predicate> predicates = new ArrayList<>();
      if (doctorId != null) {
        predicates.add(builder.equal(root.get("doctor").get("id"), doctorId));
      }
      if (historyId != null) {
        predicates.add(builder.equal(root.get("medicalHistory").get("id"), historyId));
      }
      if (specialtyId != null) {
        predicates.add(builder.equal(root.get("specialty").get("id"), specialtyId));
      }
      if(start != null && end != null){
        predicates.add(builder.between(root.get("createdAt"), start, end));
      }
      return builder.and(predicates.toArray(new Predicate[0]));
    }, pageable);
  }

  Page<Treatment> findByMedicalHistory_Id(long id, Pageable pageable);
}
