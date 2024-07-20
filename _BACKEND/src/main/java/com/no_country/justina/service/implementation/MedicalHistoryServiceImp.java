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

import java.time.LocalDateTime;

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
  public Page<MedicalHistory> getAllByIdentityLastname(Pageable pageable,
                                                       String lastname,
                                                       String identification,
                                                       LocalDateTime start,
                                                       LocalDateTime end
                                                       ) {
    if (start.isAfter(end)) {
      throw new IllegalArgumentException("La fecha de inicio debe ser anterior a la fecha de término.");
    }
    if (lastname != null && lastname.length() < 4) {
      throw new IllegalArgumentException("El apellido debe al menos tener 3 caracteres.");
    }
    if (identification != null && identification.length() < 5) {
      throw new IllegalArgumentException("El doc de identificación debe al menos tener 4 caracteres.");
    }
    return this.medicalHistoryRepo.findByLastnameCreationIdentification(
            pageable, lastname + "%", identification + "%", start, end);
  }

  @Override
  public MedicalHistory update(MedicalHistory medicalHistory) {
    this.historyExistById(medicalHistory.getId());
    this.medicalHistoryRepo.updateAllById(
            medicalHistory.getBloodType(),
            medicalHistory.getJob(),
            medicalHistory.getReligion(),
            medicalHistory.getId());
    return getById(medicalHistory.getId());
  }

  @Override
  public void deleteById(Long id) {
    this.historyExistById(id);
    this.medicalHistoryRepo.deleteById(id);
  }

  private void historyExistById(long id) {
    boolean existHistory = this.medicalHistoryRepo.existsById(id);
    if (!existHistory) throw new EntityNotFoundException("Historia clínica no encontrada, id" + id);
  }
}
