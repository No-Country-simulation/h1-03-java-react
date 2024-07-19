package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.dto.DateRange;
import com.no_country.justina.model.entities.MedicalHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

public interface IMedicalHistoryService {
  MedicalHistory create(MedicalHistory medicalHistory);
  MedicalHistory getById(Long id);
  Page<MedicalHistory> getAll(Pageable pageable);

  Page<MedicalHistory> getAllByIdentityLastname(Pageable pageable,
                                                String lastname,
                                                String identification,
                                                LocalDateTime start,
                                                LocalDateTime end);

  MedicalHistory update(MedicalHistory medicalHistory);
  void deleteById(Long id);
}
