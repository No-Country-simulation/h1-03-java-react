package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.enums.Genre;
import com.no_country.justina.model.enums.MaritalStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
  Optional<Patient> findByUserId(Long id);
}
