package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.PatientRepository;
import com.no_country.justina.service.interfaces.IPatientService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Slf4j
public class PatientServiceImp implements IPatientService {
  private final PatientRepository patientRepo;

  @Override
  @Transactional
  public Patient create(Patient patient) {
    UserEntity user = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    patient.setUser(user);
    return this.patientRepo.save(patient);
  }

  @Override
  public Patient getById(Long id) {
    return this.patientRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Paciente no encontrado, id:" + id));
  }

  @Override
  public Page<Patient> getAll(Pageable pageable) {
    return this.patientRepo.findAll(pageable);
  }

  @Override
  public Patient update(Patient patient) {
    this.verifyPatientExist(patient.getIdPatient());
    this.patientRepo.updateById(
            patient.getDocIdentity(),
            patient.getPhone(),
            patient.getAddress(),
            patient.getBirthdate(),
            patient.getMaritalStatus(),
            patient.getGenre(),
            patient.getIdPatient()
    );
    return getById(patient.getIdPatient());
  }

  @Override
  public Patient getByUserId(Long id) {
    return patientRepo.findByUserId(id).orElseThrow(
            () -> new EntityNotFoundException("Paciente no cargado a la base de datos"));
  }

  private void verifyPatientExist(long id){
    boolean exist = this.patientRepo.existsById(id);
    if(!exist) throw new EntityNotFoundException("Paciente no encontrado, id:"+id);
  }
}
