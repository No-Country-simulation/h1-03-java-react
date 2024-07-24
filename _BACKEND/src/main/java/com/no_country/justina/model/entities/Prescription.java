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
public class Prescription {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(updatable = false, nullable = false)
  private LocalDateTime createdAt;

  @ManyToOne
  @JoinColumn(name = "treatment_id")
  private Treatment treatment;

  @ManyToOne
  @JoinColumn(name = "patient_id", nullable = false)
  private Patient patient;

  @ManyToOne
  @JoinColumn(name = "doctor_id", nullable = false)
  private Doctor doctor;

  @PrePersist
  public void onCreate(){
    this.createdAt = LocalDateTime.now();
  }
}
