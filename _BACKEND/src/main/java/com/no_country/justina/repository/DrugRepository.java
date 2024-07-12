package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Drug;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DrugRepository extends JpaRepository<Drug, Long> {

  Optional<Drug> findByNameIgnoreCase(String name);

  Page<Drug> findByNameLikeIgnoreCase(String name, Pageable pageable);
}
