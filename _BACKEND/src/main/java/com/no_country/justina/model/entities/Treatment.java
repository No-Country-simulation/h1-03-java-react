package com.no_country.justina.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Treatment {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String diagnosis;

  @Column(columnDefinition = "TEXT")
  private String description;
  @Column(updatable = false)
  private LocalDateTime createdAt;
  @ManyToOne
  @JoinColumn(name = "medical_history_id", nullable = false)
  private MedicalHistory medicalHistory;
  @ManyToOne
  @JoinColumn(name = "appointment_id")
  private Appointment appointment;

  @ManyToOne
  @JoinColumn(name = "doctor_id", nullable = false)
  private Doctor doctor;

  @ManyToOne
  @JoinColumn(name = "specialty_id", nullable = false)
  private Specialty specialty;

  @PrePersist
  public void onCreate(){
    this.createdAt = LocalDateTime.now();
  }
}
