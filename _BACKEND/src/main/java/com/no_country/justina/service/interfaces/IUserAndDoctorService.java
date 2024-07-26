package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.dto.UserAndDoctorRes;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.UserEntity;

public interface IUserAndDoctorService {
    UserAndDoctorRes update(UserEntity user, Doctor doctor);
}
