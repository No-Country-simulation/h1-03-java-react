package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Indication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IndicationRepository extends JpaRepository<Indication, Long> {
}
