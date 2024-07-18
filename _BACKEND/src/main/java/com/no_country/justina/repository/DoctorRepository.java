package com.no_country.justina.repository;

import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
  @Transactional
  @Modifying
  @Query("update Doctor d set d.phone = ?1, d.address = ?2, d.license = ?3, d.specialty = ?4 where d.id = ?5")
  int updateByIdDoctor(String phone, String address, String license, Specialty specialty, Long id);
}
