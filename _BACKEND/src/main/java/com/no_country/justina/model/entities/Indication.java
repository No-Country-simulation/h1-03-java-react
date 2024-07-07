package com.no_country.justina.model.entities;

import com.no_country.justina.model.enums.DrugForm;
import com.no_country.justina.model.enums.DrugRoute;
import com.no_country.justina.model.enums.DrugStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Indication {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long idIndication;

  private int dosage;
  @Column(columnDefinition = "TINYINT")
  private int quantity;
  @Enumerated(EnumType.STRING)
  @Column(columnDefinition = "VARCHAR(25)")
  private DrugForm form;
  @Enumerated(EnumType.STRING)
  @Column(columnDefinition = "VARCHAR(25)")
  private DrugRoute routeAdministration;
  @Column(columnDefinition = "TINYINT")
  private int frequency;
  @Column(columnDefinition = "TINYINT")
  private int duration;
  private LocalDate startDate;
  private String description;
  @Enumerated(EnumType.STRING)
  @Column(columnDefinition = "VARCHAR(25)")
  private DrugStatus drugStatus;

  @ManyToOne
  @JoinColumn(name = "drug_id", nullable = false)
  private Drug drug;

  @ManyToOne
  @JoinColumn(name = "prescription_id", nullable = false)
  private Prescription prescription;
}
