package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.DoctorRes;
import com.no_country.justina.model.dto.SpecialtyRes;
import com.no_country.justina.model.entities.Doctor;
import lombok.RequiredArgsConstructor;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertDoctorRes extends AbstractConverter<Doctor, DoctorRes> {
  @Override
  protected DoctorRes convert(Doctor doctor) {
    return new DoctorRes(
            doctor.getId(),
            doctor.getPhone(),
            doctor.getAddress(),
            doctor.getLicense(),
            new SpecialtyRes(doctor.getSpecialty().getIdSpecialty(), doctor.getSpecialty().getName()),
            String.format("%s %s",
                    doctor.getUserEntity().getName(),
                    doctor.getUserEntity().getLastname())
    );
  }
}
