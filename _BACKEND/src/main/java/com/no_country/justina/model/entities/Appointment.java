package com.no_country.justina.model.entities;

import com.no_country.justina.model.enums.AppointmentStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Appointment {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long idAppointment;

  private LocalDateTime appointment;
  @Enumerated(EnumType.STRING)
  private AppointmentStatus appointmentStatus;

  @ManyToOne
  @JoinColumn(name = "patient_id", nullable = false)
  private Patient patient;

  @ManyToOne
  @JoinColumn(name = "doctor_id", nullable = false)
  private Doctor doctor;
}
