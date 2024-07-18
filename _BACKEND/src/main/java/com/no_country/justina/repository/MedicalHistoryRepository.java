package com.no_country.justina.repository;

import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.enums.BloodType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory, Long> {
  @Transactional
  @Modifying
  @Query("update MedicalHistory m set m.bloodType = ?1, m.job = ?2, m.religion = ?3 where m.idMedicalHistory = ?4")
  int updateAllById(BloodType bloodType, String job, String religion, long idMedicalHistory);

}
