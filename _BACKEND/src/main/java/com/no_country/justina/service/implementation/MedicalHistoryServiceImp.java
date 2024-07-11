package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.MedicalHistoryExistException;
import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.repository.MedicalHistoryRepository;
import com.no_country.justina.service.interfaces.IMedicalHistoryService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MedicalHistoryServiceImp implements IMedicalHistoryService {
  private final MedicalHistoryRepository medicalHistoryRepo;

  @Override
  public MedicalHistory create(MedicalHistory medicalHistory) {
    var patient = medicalHistory.getPatient();
    if (patient.getMedicalHistory() == null) {
      return this.medicalHistoryRepo.save(medicalHistory);
    }
    throw new MedicalHistoryExistException(patient.getIdPatient());
  }

  @Override
  public MedicalHistory getById(Long id) {
    return this.medicalHistoryRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Historia clínica no encontrada, id:" + id));
  }

  @Override
  public Page<MedicalHistory> getAll(Pageable pageable) {
    return this.medicalHistoryRepo.findAll(pageable);
  }

  @Override
  public MedicalHistory update(MedicalHistory medicalHistory) {
      this.historyExistById(medicalHistory.getIdMedicalHistory());
      return this.medicalHistoryRepo.save(medicalHistory);
  }

  @Override
  public void deleteById(Long id) {
    this.historyExistById(id);
    this.medicalHistoryRepo.deleteById(id);
  }

  private void historyExistById(long id){
    boolean existHistory = this.medicalHistoryRepo.existsById(id);
    if(!existHistory) throw new EntityNotFoundException("Historia clínica no encontrada, id"+id);
  }
}
