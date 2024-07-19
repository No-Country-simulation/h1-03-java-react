package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.repository.DoctorRepository;
import com.no_country.justina.service.interfaces.IDoctorService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DoctorServiceImp implements IDoctorService {

    private final DoctorRepository doctorRepository;
    @Override
    public Doctor create(Doctor doctor) {
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
    public Doctor update(Doctor doctor) {
        return doctorRepository.save(doctor);
    }
}