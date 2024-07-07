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
public class Drug {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long idDrug;
  @Column(columnDefinition = "VARCHAR(50)")
  private String name;
}
