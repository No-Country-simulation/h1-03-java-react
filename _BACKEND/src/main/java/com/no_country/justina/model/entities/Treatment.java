package com.no_country.justina.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Treatment {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long idTreatment;

  @Column(columnDefinition = "VARCHAR(150)")
  private String diagnosis;

  @Column(columnDefinition = "TEXT")
  private String description;
}
