package com.no_country.justina.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalHistoryReq {
  private Long id;
  private Integer bloodType;
  private String job;
  private String religion;
  private PatientReq patient;
}
