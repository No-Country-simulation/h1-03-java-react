package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Indication;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Set;

public interface IIndicationService {
  Indication create(Indication patient);

  Set<Indication> createAll(Set<Indication> indications);

  Indication getById(Long id);
  Page<Indication> getAll(Pageable pageable);

  List<Indication> getByPrescription(Long id);

  Indication update(Indication patient);
  void deleteById(Long id);
  Indication stopMedication(long id);
}
