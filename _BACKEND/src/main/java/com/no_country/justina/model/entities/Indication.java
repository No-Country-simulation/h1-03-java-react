package com.no_country.justina.model.entities;

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
  private Long id;

  private String dosage;
  @Column(columnDefinition = "TINYINT")
  private int quantity;
  @Column(columnDefinition = "TINYINT")
  private int quantityByFrequency;
  @ManyToOne
  @JoinColumn(name = "form_id", nullable = false)
  private DrugForm form;
  @ManyToOne
  @JoinColumn(name = "route_id", nullable = false)
  private DrugRoute route;
  @Column(columnDefinition = "TINYINT")
  private int frequency;
  @Column(columnDefinition = "TINYINT")
  private int duration;
  private LocalDate startDate;
  private String description;
  @Enumerated(EnumType.STRING)
  @Column(length = 25)
  private DrugStatus drugStatus;

  @ManyToOne
  @JoinColumn(name = "drug_id", nullable = false)
  private Drug drug;

  @ManyToOne
  @JoinColumn(name = "prescription_id", nullable = false)
  private Prescription prescription;

  @PrePersist
  public void onCreate(){
    this.drugStatus = DrugStatus.ACTIVE;
  }
}
