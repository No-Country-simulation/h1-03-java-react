package com.no_country.justina.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TreatmentRes {
  private long id;
  private String diagnosis;
  private String description;
  private String reason_consult;
  private String plan;
  private MedicalHistoryShort medicalHistory;
  private DoctorShortRes doctor;
  private SpecialtyRes specialty;
}
