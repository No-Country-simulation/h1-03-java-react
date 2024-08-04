package com.no_country.justina.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AppointmentShortRes {
  private long id;
  private LocalDateTime date;
  private int appointmentStatus;
  private PatientShortRes patient;
  private ShiftShortRes shift;
  private Integer shiftTime;
}
