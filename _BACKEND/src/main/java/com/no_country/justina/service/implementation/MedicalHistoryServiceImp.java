package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.entities.Role;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.MedicalHistoryRepository;
import com.no_country.justina.service.interfaces.IMedicalHistoryService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class MedicalHistoryServiceImp implements IMedicalHistoryService {
  private final MedicalHistoryRepository medicalHistoryRepo;
  private final ModelMapper mapper;

  @Override
  public MedicalHistory create(MedicalHistory medicalHistory) {
    return this.medicalHistoryRepo.save(medicalHistory);
  }

  @Override
  public MedicalHistory getById(Long id) {
    UserEntity user = (UserEntity)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    Set<Role> roles = user.getRoles();
    for (Role role: roles) {
      if (role.getRoleName().equals("PATIENT")){
        return this.medicalHistoryRepo.findById(user.getId())
                .orElseThrow(() -> new EntityNotFoundException("Historia clínica no encontrada, id:" + id));
      }
    }
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
    if(start != null && end != null){
      if (start.isAfter(end)) {
        throw new IllegalArgumentException("La fecha de inicio debe ser anterior a la fecha de término.");
      }
    }
    if (lastname != null && lastname.length() < 3) {
      throw new IllegalArgumentException("El apellido debe al menos tener 3 caracteres.");
    }
    if (identification != null && identification.length() < 4) {
      throw new IllegalArgumentException("El doc de identificación debe al menos tener 4 caracteres.");
    }
    return this.medicalHistoryRepo.findByLastnameCreationIdentification(
            pageable, lastname, identification, start, end);
  }

  @Override
  public MedicalHistory update(MedicalHistory medicalHistory) {
    MedicalHistory current = this.getById(medicalHistory.getId());
    if(medicalHistory.getJob() != null){
      current.setJob(medicalHistory.getJob());
    }
    if(medicalHistory.getReligion() != null){
      current.setReligion(medicalHistory.getReligion());
    }
    if(medicalHistory.getBloodType() != null){
      current.setBloodType(medicalHistory.getBloodType());
    }
    return this.medicalHistoryRepo.save(current);
  }

  @Override
  public void deleteById(Long id) {
    this.historyExistById(id);
    this.medicalHistoryRepo.deleteById(id);
  }

  @Override
  public MedicalHistory getByPatientId(Long id) {
    return this.medicalHistoryRepo.findByPatientId(id)
            .orElseThrow(()->new EntityNotFoundException("Historia clínica no encontrada, id: "+id));
  }

  @Override
  public MedicalHistory getByCurrentPatient() {
    UserEntity currentUser = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    return this.medicalHistoryRepo.findByPatient_User_Id(currentUser.getId())
            .orElseThrow(()->new EntityNotFoundException("Historia no encontrada para este user, id: "+currentUser));
  }

  private void historyExistById(long id) {
    boolean existHistory = this.medicalHistoryRepo.existsById(id);
    if (!existHistory) throw new EntityNotFoundException("Historia clínica no encontrada, id: " + id);
  }
}
