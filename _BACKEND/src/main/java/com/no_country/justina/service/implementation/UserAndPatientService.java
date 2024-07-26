package com.no_country.justina.service.implementation;

import com.no_country.justina.model.dto.*;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.service.interfaces.*;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserAndPatientService implements IUserAndPatientService {
    private final IUserService userService;
    private final IPatientService patientService;
    private final ModelMapper modelMapper;

    @Override
    public UserAndPatientRes update(UserEntity user, Patient patient) {
        UserRes userReq = modelMapper.map(userService.update(user), UserRes.class);
        PatientRes patientRes = modelMapper.map(patientService.update(patient), PatientRes.class);
        return new UserAndPatientRes(userReq, patientRes);
    }
}
