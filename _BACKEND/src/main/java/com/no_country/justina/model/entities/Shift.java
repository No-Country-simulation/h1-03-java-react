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
public class Shift {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  private LocalDateTime startDate;
  private LocalDateTime endDate;
  private int appointment;

  @ManyToOne
  @JoinColumn(name = "doctor_id")
  private Doctor doctor;

  @ManyToOne
  @JoinColumn(name = "specialty_id", nullable = false)
  private Specialty specialty;
}
