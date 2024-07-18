package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.AppointmentStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AppointmentRes {
  private long appointmentId;
  private LocalDateTime date;
  private AppointmentStatus appointmentStatus;
  private String doctor;
  private String patient;
  private String specialty;
}
