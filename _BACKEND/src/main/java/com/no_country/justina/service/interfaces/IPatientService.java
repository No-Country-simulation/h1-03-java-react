package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.entities.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IPatientService {
  Patient create(Patient patient, MedicalHistory medicalHistory);

  Patient createEmpty(UserEntity id);

  Patient getById(Long id);
  Page<Patient> getAll(Pageable pageable);
  Patient update(Patient patient);
  void deleteById(Long id);
}
