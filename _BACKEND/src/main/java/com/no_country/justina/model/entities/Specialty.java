package com.no_country.justina.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Specialty {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long idSpecialty;
  @Column(length = 50)
  private String name;
}
