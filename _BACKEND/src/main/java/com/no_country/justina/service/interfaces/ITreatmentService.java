package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Treatment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITreatmentService {
  Treatment create(Treatment treatment);
  Treatment getById(Long id);
  Page<Treatment> getAll(Pageable pageable);
  Treatment update(Treatment treatment);
  void deleteById(Long id);
}
