package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Drug;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IDrugService {
  Drug create(Drug drug);
  Drug getById(Long id);
  Page<Drug> getAll(Pageable pageable);
  Drug update(Drug drug);
  void deleteById(Long id);
}
