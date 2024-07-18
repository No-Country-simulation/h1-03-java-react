package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.PatientReq;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.service.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertPatientReq extends AbstractConverter<PatientReq, Patient> {
  private final IUserService userService;

  @Override
  protected Patient convert(PatientReq patientReq) {
    var patient = new Patient();
    var user = this.userService.getUserById(patientReq.getUserId());
    patient.setDocIdentity(patientReq.getDocIdentity());
    patient.setPhone(patientReq.getPhone());
    patient.setAddress(patientReq.getAddress());
    patient.setBirthdate(patientReq.getBirthdate());
    patient.setMaritalStatus(patientReq.getMaritalStatus());
    patient.setGenre(patientReq.getGenre());
    patient.setUser(user);
    return patient;
  }
}
