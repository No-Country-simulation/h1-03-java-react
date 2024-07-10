package com.no_country.justina.model.entities;

import com.no_country.justina.model.enums.Genre;
import com.no_country.justina.model.enums.MaritalStatus;
import com.no_country.justina.util.GenreConverter;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long idPatient;
  @Column(nullable = false, unique = true, columnDefinition = "VARCHAR(25)")
  private String docIdentity;
  @Column(nullable = false, columnDefinition = "VARCHAR(25)")
  private String phone;
  @Column(nullable = false, columnDefinition = "VARCHAR(100)")
  private String address;
  private LocalDate birthdate;
  @Enumerated(EnumType.STRING)
  private MaritalStatus maritalStatus;
  @Convert(converter = GenreConverter.class)
  @Column(columnDefinition = "TINYINT")
  private Genre genre;
  private boolean isEnabled;

  @OneToOne(mappedBy = "patient")
  private MedicalHistory medicalHistory;

  @PrePersist
  public void onCreate(){
    this.isEnabled = true;
  }
}
