package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.DoctorShortRes;
import com.no_country.justina.model.entities.Doctor;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
public class ConvertDoctorShort extends AbstractConverter<Doctor, DoctorShortRes> {
  @Override
  protected DoctorShortRes convert(Doctor doctor) {
    var doctorRes = new DoctorShortRes();
    String doctorName = String.format("%s %s",
            doctor.getUserEntity().getName(),
            doctor.getUserEntity().getLastname());
    doctorRes.setId(doctor.getId());
    doctorRes.setDoctor(doctorName);
    doctorRes.setLicence(doctor.getLicense());

    return doctorRes;
  }
}
