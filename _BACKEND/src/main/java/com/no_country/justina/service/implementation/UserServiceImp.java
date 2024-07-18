package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.UserIdNotFoundException;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.UserRepository;
import com.no_country.justina.service.interfaces.IAdminService;
import com.no_country.justina.service.interfaces.IDoctorService;
import com.no_country.justina.service.interfaces.IPatientService;
import com.no_country.justina.service.interfaces.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class UserServiceImp implements IUserService {
    private final UserRepository userRepository;
    private final IPatientService patientService;
    private final IDoctorService doctorService;
    private final IAdminService adminService;

    @Override
    @Transactional
    public UserEntity create(UserEntity userEntity) {
        var newUser = userRepository.save(userEntity);
        switch (userEntity.getRole()){
            case PATIENT :
                var patient = patientService.createEmpty(newUser);
                newUser.setPatient(patient);
                break;
            case DOCTOR :
                var doctor = doctorService.createEmpty(newUser);
                newUser.setDoctor(doctor);
                break;
            case ADMIN :
                var admin = adminService.createEmpty(newUser);
                newUser.setAdmin(admin);
                break;
        };
      return newUser;
    }

    @Override
    public UserEntity getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(()->new UserIdNotFoundException(id));
    }

    @Override
    public Page<UserEntity> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public UserEntity update(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    @Override
    public void deleteById(Long id) {
        var userDb = userRepository.findById(id)
                .orElseThrow(() -> new UserIdNotFoundException(id));
        userDb.setEnabled(false);
        userRepository.save(userDb);
    }

}
