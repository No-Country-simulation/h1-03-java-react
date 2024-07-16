package com.no_country.justina.model.dto;

import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.enums.AppointmentStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AppointmentReq {
  private LocalDateTime appointment;
  private AppointmentStatus appointmentStatus;
  private long patientId;
  private long doctorId;
}
