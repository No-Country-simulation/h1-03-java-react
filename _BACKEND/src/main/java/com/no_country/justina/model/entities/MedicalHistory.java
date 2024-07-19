package com.no_country.justina.model.entities;

import com.no_country.justina.model.enums.BloodType;
import jakarta.persistence.*;
import lombok.*;

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
  @Column(updatable = false, nullable = false)
  private LocalDateTime createdAt;
  @Enumerated(EnumType.STRING)
  private BloodType bloodType;
  @Column(length = 100)
  private String job;
  @Column(length = 100)
  private String religion;

  @OneToOne
  @JoinColumn(name = "patient_id", nullable = false)
  private Patient patient;

  @PrePersist
  public void onCreate(){
    this.createdAt = LocalDateTime.now();
  }
}
