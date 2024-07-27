package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Specialty;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.DoctorRepository;
import com.no_country.justina.service.interfaces.IDoctorService;
import com.no_country.justina.service.interfaces.ISpecialtyService;
import com.no_country.justina.service.interfaces.IUserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DoctorServiceImp implements IDoctorService {

    private final DoctorRepository doctorRepository;
    private final IUserService userService;
    private final ISpecialtyService specialtyService;
    @Override
    @Transactional
    public Doctor create(Doctor doctor) {
        UserEntity user = (UserEntity)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        doctor.setUser(userService.getUserById(user.getId()));
        doctor.setSpecialty(specialtyService.getById(doctor.getSpecialty().getId()));
        return doctorRepository.save(doctor);
    }

    @Override
    public Doctor getDoctor(Long id) {
        return doctorRepository.findById(id)
                .orElseThrow(()->new EntityNotFoundException("Doctor no encontrado, id: "+id));
    }

    @Override
    public Page<Doctor> getAllDoctors(Pageable pageable) {
        return doctorRepository.findAll(pageable);
    }

    @Override
    @Transactional
    public Doctor update(Doctor doctor) {
        Doctor doctorDB = doctorRepository.findById(doctor.getId())
                                            .orElseThrow(() -> new EntityNotFoundException(
                                                    "El doctor con id " + doctor.getId() +
                                                    " no se encuentra en base de datos"));
        if(doctor.getAddress() != null) {
            doctorDB.setAddress(doctor.getAddress());
        }
        if(doctor.getPhone() != null) {
            doctorDB.setPhone(doctor.getPhone());
        }
        if(doctor.getLicense() != null) {
            doctorDB.setLicense(doctor.getLicense());
        }
        if(doctor.getSpecialty() != null) {
            Specialty specialtyDB = specialtyService.getById(doctor.getSpecialty().getId());
            doctorDB.setSpecialty(specialtyDB);
        }
        return doctorRepository.save(doctorDB);
    }

    @Override
    public Doctor getByUserId(Long id) {
        return doctorRepository.findByUserId(id).orElseThrow(() -> new EntityNotFoundException("Datos de doctor no cargados"));
    }
}
