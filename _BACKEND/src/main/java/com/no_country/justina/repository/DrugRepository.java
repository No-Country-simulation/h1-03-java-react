package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Drug;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrugRepository extends JpaRepository<Drug, Long> {
}