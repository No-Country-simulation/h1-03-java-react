package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.dto.UserAndDoctorRes;
import com.no_country.justina.model.dto.UserAndPatientRes;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.entities.UserEntity;

public interface IUserAndPatientService {
    UserAndPatientRes update(UserEntity user, Patient patient);
    UserAndPatientRes get();
}
