package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.entities.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;


public interface IPatientService {

    @Transactional
    Patient create(Patient patient);

    Patient getById(Long id);

    Page<Patient> getAll(Pageable pageable);

    Patient update(Patient patient);

    Patient getByUserId(Long id);
}
