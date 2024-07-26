package com.no_country.justina.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TreatmentReq {
  private Long id;
  @NotBlank private String reason_consult;
  @NotBlank private String plan;
  @NotBlank private String diagnosis;
  @NotBlank private String description;
  @NotNull private MedicalHistoryReq medicalHistory;
  @NotNull private AppointmentReq appointment;
}
