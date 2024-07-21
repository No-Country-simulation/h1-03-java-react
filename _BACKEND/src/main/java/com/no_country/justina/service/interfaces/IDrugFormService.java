package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.DrugForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IDrugFormService {
  DrugForm create(DrugForm drugForm);
  DrugForm getById(Long id);
  Page<DrugForm> getAll(Pageable pageable);
  DrugForm update(DrugForm drugForm);
  void deleteById(Long id);
}
