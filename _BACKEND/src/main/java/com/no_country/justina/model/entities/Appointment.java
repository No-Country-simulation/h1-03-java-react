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
  private Long idAppointment;

  private LocalDateTime date;

  @Enumerated(EnumType.STRING)
  private AppointmentStatus appointmentStatus;

  @ManyToOne
  @JoinColumn(name = "patient_id", nullable = false)
  private Patient patient;

  @ManyToOne
  @JoinColumn(name = "shift_id", nullable = false)
  private Shift shift;

  @PrePersist
  public void onCreate(){
    this.appointmentStatus = AppointmentStatus.PENDING;
  }
}
