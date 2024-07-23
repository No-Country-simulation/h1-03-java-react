package com.no_country.justina.service.implementation;

import com.no_country.justina.model.dto.EnumDto;
import com.no_country.justina.service.interfaces.IEnumService;
import org.springframework.stereotype.Service;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class EnumServiceImp implements IEnumService {
  @Override
  public <E extends Enum<E>> List<EnumDto> getEnum(Class<E> enumType) {
    List<EnumDto> keyValues = new ArrayList<>();
    for (E enumConstant : enumType.getEnumConstants()) {
      try {
        // Utilizamos reflection para obtener el método getId
        Method getIdMethod = enumType.getMethod("getId");
        int value = (int) getIdMethod.invoke(enumConstant);
        keyValues.add(new EnumDto(enumConstant.name(), value));
      } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
        throw new RuntimeException("El enum no tiene el método getId o el método no es accesible", e);
      }
    }
    Collections.sort(keyValues);
    return keyValues;
  }
}
