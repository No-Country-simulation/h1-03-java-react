package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Prescription;
import com.no_country.justina.repository.PrescriptionRepository;
import com.no_country.justina.service.interfaces.IPrescriptionService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PrescriptionServiceImp implements IPrescriptionService {
  private final PrescriptionRepository prescriptionRepository;

  @Override
  public Prescription create(Prescription prescription) {
    return this.prescriptionRepository.save(prescription);
  }

  @Override
  public Prescription getById(Long id) {
    return this.prescriptionRepository.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Prescripción no encontrada, id:"+id));
  }

  @Override
  public Page<Prescription> getAll(Pageable pageable) {
    return this.prescriptionRepository.findAll(pageable);
  }

  @Override
  public Prescription update(Prescription prescription) {
    this.verifyPrescriptionExist(prescription.getIdPrescription());
    return this.prescriptionRepository.save(prescription);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyPrescriptionExist(id);
    this.prescriptionRepository.deleteById(id);
  }

  private void verifyPrescriptionExist(long id){
    boolean exist = this.prescriptionRepository.existsById(id);
    if(!exist) throw new EntityNotFoundException("Prescripción no encontrada, id:"+id);
  }
}
