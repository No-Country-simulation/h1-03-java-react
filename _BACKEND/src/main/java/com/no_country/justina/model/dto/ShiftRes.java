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
public class ShiftRes {
  private long idShift;
  private LocalDateTime startDate;
  private LocalDateTime endDate;
  private int appointment;
  private String doctor;
  private String specialty;
}