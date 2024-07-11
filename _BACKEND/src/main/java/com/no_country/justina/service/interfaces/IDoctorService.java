package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IDoctorService {
    Doctor create(Doctor doctor);
    Optional<Doctor> getDoctor(Long id);
    Page<Doctor> getAllDoctors(Pageable pageable);
    Doctor update(Doctor doctor);
}
