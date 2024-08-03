package com.no_country.justina.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PrescriptionRes {
  private Long id;
  private LocalDateTime createdAt;
  private TreatmentShortRes treatment;
  private PatientShortRes patient;
  private DoctorShortRes doctor;
  private SpecialtyRes specialty;
}
