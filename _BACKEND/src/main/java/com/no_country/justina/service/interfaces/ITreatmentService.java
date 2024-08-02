package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Treatment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

public interface ITreatmentService {
  Treatment create(Treatment treatment);
  Treatment getById(Long id);

  Page<Treatment> getByHistorieForPatient(Pageable pageable,
                                          Long doctorId,
                                          Long specialtyId,
                                          LocalDateTime start,
                                          LocalDateTime end);

  Page<Treatment> getByHistorieForDoctor(Long id, Pageable pageable);

  Page<Treatment> getAll(Pageable pageable);

  Page<Treatment> getAllByFilters(Pageable pageable,
                                  Long doctorId,
                                  Long historyId,
                                  Long specialtyId,
                                  LocalDateTime start,
                                  LocalDateTime end);

  Treatment update(Treatment treatment);
  void deleteById(Long id);
}
