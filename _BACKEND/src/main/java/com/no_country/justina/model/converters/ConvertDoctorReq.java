package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.DoctorReq;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.service.interfaces.ISpecialtyService;
import com.no_country.justina.service.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertDoctorReq extends AbstractConverter<DoctorReq, Doctor> {
  private final ISpecialtyService specialtyService;
  private final IUserService userService;

  @Override
  protected Doctor convert(DoctorReq dto) {
    Doctor doctor = new Doctor();
    doctor.setPhone(dto.getPhone());
    doctor.setAddress(dto.getAddress());
    doctor.setLicense(dto.getLicense());
    doctor.setSpecialty(specialtyService.getById(dto.getSpecialtyId()));
    return doctor;
  }
}
