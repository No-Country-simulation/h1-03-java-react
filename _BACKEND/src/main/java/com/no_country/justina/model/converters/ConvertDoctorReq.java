package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.DoctorReq;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.service.interfaces.ISpecialtyService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertDoctorReq extends AbstractConverter<DoctorReq, Doctor> {
  private final ISpecialtyService specialtyService;

  @Override
  protected Doctor convert(DoctorReq dto) {
    return new Doctor(
            null,
            dto.getPhone(),
            dto.getAddress(),
            dto.getLicense(),
            null,
            specialtyService.getById(dto.getSpecialtyId())
    );
  }
}
