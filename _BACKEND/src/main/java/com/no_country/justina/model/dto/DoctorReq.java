package com.no_country.justina.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DoctorReq {
  @NotBlank private String phone;
  @NotBlank private String address;
  @NotBlank private String license;
  @NotNull  private Long specialtyId;
  private long userId;
}
