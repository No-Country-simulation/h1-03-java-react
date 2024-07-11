package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Prescription;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IPrescriptionService {
  Prescription create(Prescription prescription);
  Prescription getById(Long id);
  Page<Prescription> getAll(Pageable pageable);
  Prescription update(Prescription prescription);
  void deleteById(Long id);
}
