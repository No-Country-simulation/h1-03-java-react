package com.no_country.justina.model.enums;

import lombok.Getter;

@Getter
public enum BloodType {
  O_POSITIVO(1),
  O_NEGATIVO(2),
  A_POSITIVO(3),
  A_NEGATIVO(4),
  B_POSITIVO(5),
  B_NEGATIVO(6),
  AB_POSITIVO(7),
  AB_NEGATIVO(8);

  private final int id;
  BloodType(int id) {
    this.id = id;
  }

  public static BloodType fromId(int id) {
    for (BloodType status : values()) {
      if (status.getId() == id) {
        return status;
      }
    }
    throw new IllegalArgumentException("id invalido:" + id);
  }
}
