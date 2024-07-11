package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.repository.PatientRepository;
import com.no_country.justina.service.interfaces.IPatientService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class PatientServiceImp implements IPatientService {
  private final PatientRepository patientRepo;

  @Override
  public Patient create(Patient patient) {
    return this.patientRepo.save(patient);
  }

  @Override
  public Patient getById(Long id) {
    return this.patientRepo.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Paciente no encontrado, id:"+id));
  }

  @Override
  public Page<Patient> getAll(Pageable pageable) {
    return this.patientRepo.findAll(pageable);
  }

  @Override
  public Patient update(Patient patient) {
    this.getById(patient.getIdPatient());
    return this.patientRepo.save(patient);
  }

  @Override
  public void deleteById(Long id) {
    var patientFound = this.getById(id);
    patientFound.setEnabled(false);
    this.patientRepo.save(patientFound);
  }
}
