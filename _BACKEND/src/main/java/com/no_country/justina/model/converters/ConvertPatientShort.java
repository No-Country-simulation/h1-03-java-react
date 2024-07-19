package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.PatientShortRes;
import com.no_country.justina.model.entities.Patient;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
public class ConvertPatientShort extends AbstractConverter<Patient, PatientShortRes> {
  @Override
  protected PatientShortRes convert(Patient patient) {
    var patientRes = new PatientShortRes();
    String patientName = String.format("%s %s",
            patient.getUser().getName(),
            patient.getUser().getLastname());

    patientRes.setId(patient.getIdPatient());
    patientRes.setDocIdentity(patient.getDocIdentity());
    patientRes.setPatient(patientName);
    return patientRes;
  }
}
