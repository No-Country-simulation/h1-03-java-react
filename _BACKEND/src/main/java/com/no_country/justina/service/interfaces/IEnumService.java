package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.dto.EnumDto;

import java.util.List;

public interface IEnumService {
  public <E extends Enum<E>> List<EnumDto> getEnum(Class<E> enumType);
}
