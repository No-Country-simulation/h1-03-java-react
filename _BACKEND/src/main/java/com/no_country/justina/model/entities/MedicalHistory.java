package com.no_country.justina.model.entities;

import com.no_country.justina.model.enums.BloodType;
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
public class MedicalHistory {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long idMedicalHistory;
  private LocalDateTime createdAt;
  @Enumerated(EnumType.STRING)
  private BloodType bloodType;
  @Column(columnDefinition = "VARCHAR(100)")
  private String job;
  @Column(columnDefinition = "VARCHAR(100)")
  private String religion;

  @OneToOne
  @JoinColumn(name = "patient_id")
  private Patient patient;
}
