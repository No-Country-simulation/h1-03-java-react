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
public class ShiftShortRes {
  private long id;
  private DoctorShortRes doctor;
  private SpecialtyRes specialty;
}