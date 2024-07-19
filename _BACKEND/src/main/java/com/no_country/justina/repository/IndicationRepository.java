package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Indication;
import com.no_country.justina.model.enums.DrugStatus;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IndicationRepository extends JpaRepository<Indication, Long> {

  @Transactional
  @Modifying
  @Query("UPDATE Indication i SET i.drugStatus = :status WHERE i.idIndication = :id")
  void stopIndication(long id, DrugStatus status);
}