package com.no_country.justina.service.interfaces;


import com.no_country.justina.model.entities.Specialty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ISpecialtyService {
  Specialty create(Specialty specialty);
  Specialty getById(Long id);
  Page<Specialty> getAll(Pageable pageable);
  Specialty update(Specialty specialty);
  void deleteById(Long id);
}
