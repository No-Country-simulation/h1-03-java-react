package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Prescription;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

public interface IPrescriptionService {
  Prescription create(Prescription prescription);
  Prescription getById(Long id);
  Page<Prescription> getAll(Pageable pageable);

  Page<Prescription> getAllFilters(Pageable pageable,
                                   Long doctorId,
                                   Long patientId,
                                   Long specialtyId,
                                   LocalDateTime start,
                                   LocalDateTime end);

  Prescription update(Prescription prescription);
  void deleteById(Long id);

  Page<Prescription> getAllCurrent(Pageable pageable,
                                   Long doctorId,
                                   Long specialtyId,
                                   LocalDateTime start,
                                   LocalDateTime end);
}
