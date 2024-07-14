package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Shift;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IShiftService {
  Shift create(Shift shift);
  Shift getById(Long id);
  Page<Shift> getAll(Pageable pageable);
  Shift update(Shift shift);
  void deleteById(Long id);
}
