package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.Genre;
import com.no_country.justina.model.enums.MaritalStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PatientUpdateReq {
  @NotBlank
  private String docIdentity;
  @NotBlank private String phone;
  @NotBlank private String address;
  @NotNull
  private LocalDate birthdate;
  @NotNull private MaritalStatus maritalStatus;
  @NotNull private Genre genre;
}