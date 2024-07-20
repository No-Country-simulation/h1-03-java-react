package com.no_country.justina.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DoctorReq {
  private Long id;
  @NotBlank private String phone;
  @NotBlank private String address;
  @NotBlank private String license;
  private SpecialtyReq specialty;
  private UserReq user;
}
