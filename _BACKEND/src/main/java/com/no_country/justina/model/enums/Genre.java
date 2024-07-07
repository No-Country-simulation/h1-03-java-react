package com.no_country.justina.model.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Genre {
  MASCULINO(0), FEMENINO(1);

  private final int value;

  public static Genre fromValue(int value) {
    for (Genre genre : values()) {
      if (genre.getValue() == value) return genre;
    }
    throw new IllegalArgumentException("valor de sexo inválido: " + value);
  }
}