package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.MedicalHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IMedicalHistoryService {
  MedicalHistory create(MedicalHistory medicalHistory);
  MedicalHistory getById(Long id);
  Page<MedicalHistory> getAll(Pageable pageable);
  MedicalHistory update(MedicalHistory medicalHistory);
  void deleteById(Long id);
}
