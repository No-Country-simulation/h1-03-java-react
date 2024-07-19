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
  private Long idPrescription;
  @Column(updatable = false, nullable = false)
  private LocalDateTime createdAt;
  @ManyToOne
  @JoinColumn(name = "treatment_id")
  private Treatment treatment;

  @PrePersist
  public void onCreate(){
    this.createdAt = LocalDateTime.now();
  }
}