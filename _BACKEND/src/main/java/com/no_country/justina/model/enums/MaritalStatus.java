package com.no_country.justina.model.enums;

import lombok.Getter;
import lombok.ToString;

@Getter
public enum MaritalStatus {
  CASADO(1),
  CONVIVIENTE(2),
  DIVORCIADO(3),
  VIUDO(4),
  SOLTERO(0);
  private final int id;

  MaritalStatus(int id) {
    this.id = id;
  }

  public static MaritalStatus fromId(int id) {
    for (MaritalStatus status : values()) {
      if (status.getId() == id) {
        return status;
      }
    }
    throw new IllegalArgumentException("Código de estado civil inválido. id:" + id);
  }
}
