package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.DrugStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
public class IndicationRes {
  private long id;
  private String dosage;
  private int quantity;
  private int quantityByFrequency;
  private DrugFormRes form;
  private DrugRouteRes routeAdministration;
  private int frequency;
  private int duration;
  private DrugStatus drugStatus;
  private LocalDateTime startDate;
  private String description;
  private DrugRes drug;
}
