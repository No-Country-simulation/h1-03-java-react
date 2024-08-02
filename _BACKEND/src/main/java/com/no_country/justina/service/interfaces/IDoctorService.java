package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IDoctorService {
  Doctor create(Doctor doctor);

  Doctor getDoctor(Long id);

  Page<Doctor> getAllDoctors(Pageable pageable);

  Doctor update(Doctor doctor);

  Doctor getByUserId(Long id);

  List<Doctor> getAllBySpecialty(long id);
}
