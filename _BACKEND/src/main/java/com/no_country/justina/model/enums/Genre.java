package com.no_country.justina.model.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Genre {
  MASCULINO(0), FEMENINO(1);

  private final int id;

  public static Genre fromId(int id) {
    for (Genre genre : values()) {
      if (genre.getId() == id) return genre;
    }
    throw new IllegalArgumentException("valor de sexo inválido: " + id);
  }
}