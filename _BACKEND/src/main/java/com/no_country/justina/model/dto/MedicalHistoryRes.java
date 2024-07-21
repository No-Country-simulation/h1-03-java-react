package com.no_country.justina.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicalHistoryRes {
  private Long id;
  private int bloodType;
  private String job;
  private String religion;
  private LocalDateTime createdAt;
  private PatientRes patient;
}
