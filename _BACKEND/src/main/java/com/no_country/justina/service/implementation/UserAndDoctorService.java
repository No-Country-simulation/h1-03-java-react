package com.no_country.justina.service.implementation;

import com.no_country.justina.model.dto.DoctorRes;
import com.no_country.justina.model.dto.UserAndDoctorRes;
import com.no_country.justina.model.dto.UserRes;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.service.interfaces.IDoctorService;
import com.no_country.justina.service.interfaces.IUserAndDoctorService;
import com.no_country.justina.service.interfaces.IUserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserAndDoctorService implements IUserAndDoctorService {
    private final IUserService userService;
    private final IDoctorService doctorService;
    private final ModelMapper modelMapper;

    @Override
    public UserAndDoctorRes update(UserEntity user, Doctor doctor) {
        UserRes userReq = modelMapper.map(userService.update(user), UserRes.class);
        DoctorRes doctorRes = modelMapper.map(doctorService.update(doctor), DoctorRes.class);
        return new UserAndDoctorRes(userReq, doctorRes);
    }

    @Override
    public UserAndDoctorRes get() {
        UserEntity user = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Doctor doctor;
        try {
            doctor = doctorService.getByUserId(user.getId());
        } catch (EntityNotFoundException ex) {
            doctor = new Doctor();
        }
        UserRes userRes = modelMapper.map(userService.getUserById(user.getId()), UserRes.class);
        DoctorRes doctorRes = modelMapper.map(doctor, DoctorRes.class);
        return new UserAndDoctorRes(userRes, doctorRes);
    }
}
