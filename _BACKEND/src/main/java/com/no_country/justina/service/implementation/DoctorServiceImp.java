package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.DoctorRepository;
import com.no_country.justina.service.interfaces.IDoctorService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        this.verifyDoctorExist(doctor.getId());
        doctorRepository.updateByIdDoctor(
                doctor.getPhone(),
                doctor.getAddress(),
                doctor.getLicense(),
                doctor.getSpecialty(),
                doctor.getId());
        return this.getDoctor(doctor.getId());
    }

    @Override
    public Doctor createEmpty(UserEntity user) {
        Doctor newDoctor = new Doctor();
        newDoctor.setUser(user);
        return this.doctorRepository.save(newDoctor);
    }
    private void verifyDoctorExist(long id){
        boolean exist = this.doctorRepository.existsById(id);
        if(!exist) throw new EntityNotFoundException("Doctor no encontrado, id:"+id);
    }
}
