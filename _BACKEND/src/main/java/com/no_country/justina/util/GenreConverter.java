package com.no_country.justina.util;

import com.no_country.justina.model.enums.Genre;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class GenreConverter implements AttributeConverter<Genre, Integer> {

  @Override
  public Integer convertToDatabaseColumn(Genre attribute) {
    return attribute != null ? attribute.getValue() : null;
  }

  @Override
  public Genre convertToEntityAttribute(Integer dbData) {
    return dbData != null ? Genre.fromValue(dbData) : null;
  }
}
