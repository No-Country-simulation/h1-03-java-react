package com.no_country.justina.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class EnumDto implements Comparable<EnumDto> {
  private String key;
  private int value;

  @Override
  public int compareTo(EnumDto o) {
    return this.value - o.getValue();
  }
}
