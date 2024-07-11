package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Indication;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IIndicationService {
  Indication create(Indication patient);
  Indication getById(Long id);
  Page<Indication> getAll(Pageable pageable);
  Indication update(Indication patient);
  void deleteById(Long id);
}
