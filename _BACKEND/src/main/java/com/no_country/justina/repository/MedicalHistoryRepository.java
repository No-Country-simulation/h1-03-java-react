package com.no_country.justina.repository;

import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.enums.BloodType;
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

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory, Long>,
        JpaSpecificationExecutor<MedicalHistory> {
  @Transactional
  @Modifying
  @Query("update MedicalHistory m set m.bloodType = ?1, m.job = ?2, m.religion = ?3 where m.id = ?4")
  int updateAllById(BloodType bloodType, String job, String religion, long idMedicalHistory);

  default Page<MedicalHistory> findByLastnameCreationIdentification(
          Pageable pageable,
          String lastname,
          String identification,
          LocalDateTime start,
          LocalDateTime end){

    return findAll((Root<MedicalHistory> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
      List<Predicate> predicates = new ArrayList<>();
      if (lastname != null) {
        predicates.add(builder.like(root.get("patient").get("lastname"), lastname));
      }
      if (identification != null) {
        predicates.add(builder.like(root.get("patient").get("docIdentity"), identification));
      }
      if(start != null && end != null){
        predicates.add(builder.between(root.get("createdAt"), start, end));
      }
      return builder.and(predicates.toArray(new Predicate[0]));

    }, pageable);
  }
}
