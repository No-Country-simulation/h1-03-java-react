package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Treatment;
import com.no_country.justina.repository.TreatmentRepository;
import com.no_country.justina.service.interfaces.ITreatmentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class TreatmentServiceImp implements ITreatmentService {
  private final TreatmentRepository treatmentRepo;

  @Override
  public Treatment create(Treatment treatment) {
    return this.treatmentRepo.save(treatment);
  }

  @Override
  public Treatment getById(Long id) {
    return this.treatmentRepo.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Tratamiento no encontrado, id:"+id));
  }

  @Override
  public Page<Treatment> getAll(Pageable pageable) {
    return this.treatmentRepo.findAll(pageable);
  }

  @Override
  public Treatment update(Treatment treatment) {
    this.verifyTreatmentExist(treatment.getIdTreatment());
    return this.treatmentRepo.save(treatment);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyTreatmentExist(id);
    this.treatmentRepo.deleteById(id);
  }

  private void verifyTreatmentExist(long id){
    boolean exist = this.treatmentRepo.existsById(id);
    if(!exist) throw new EntityNotFoundException("Tratamiento no encontrado, id: "+id);
  }
}
