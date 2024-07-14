package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.DrugForm;
import com.no_country.justina.model.enums.DrugRoute;
import com.no_country.justina.model.enums.DrugStatus;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Setter
@Getter
@NoArgsConstructor
public class IndicationRes {
  private long idIndication;
  private int dosage;
  private int quantity;
  private DrugForm form;
  private DrugRoute routeAdministration;
  private int frequency;
  private int duration;
  private DrugStatus drugStatus;
  private LocalDate startDate;
  private String description;
  private String drugName;
}
