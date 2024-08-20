package com.no_country.justina.model.enums;

import lombok.Getter;

@Getter
public enum DrugStatus {
  ACTIVE(0),
  SUSPEND(1);
  private final int id;
  DrugStatus(int id) {
    this.id = id;
  }

  public static DrugStatus fromId(int id) {
    for (DrugStatus status : values()) {
      if (status.getId() == id) {
        return status;
      }
    }
    throw new IllegalArgumentException("Estado del Fármaco con id inválido. id:" + id);
  }
}
