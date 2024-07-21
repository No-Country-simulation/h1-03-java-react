package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.DrugForm;
import com.no_country.justina.model.entities.DrugRoute;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IDrugRouteService {
  DrugRoute create(DrugRoute drugRoute);
  DrugRoute getById(Long id);
  Page<DrugRoute> getAll(Pageable pageable);
  DrugRoute update(DrugRoute drugRoute);
  void deleteById(Long id);
}
