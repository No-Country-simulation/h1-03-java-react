package com.no_country.justina.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DoctorRes {
  private long id;
  private String phone;
  private String address;
  private String license;
  private SpecialtyRes specialty;
  private UserRes user;
}
