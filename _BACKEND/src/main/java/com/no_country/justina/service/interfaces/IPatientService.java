package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Patient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IPatientService {
  Patient create(Patient patient);
  Patient getById(Long id);
  Page<Patient> getAll(Pageable pageable);
  Patient update(Patient patient);
  void deleteById(Long id);
}
