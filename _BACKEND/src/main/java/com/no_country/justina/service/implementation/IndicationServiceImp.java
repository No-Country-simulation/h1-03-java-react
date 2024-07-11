package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Indication;
import com.no_country.justina.repository.IndicationRepository;
import com.no_country.justina.service.interfaces.IIndicationService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IndicationServiceImp implements IIndicationService {
  private final IndicationRepository indicationRepo;

  @Override
  public Indication create(Indication indication) {
    return this.indicationRepo.save(indication);
  }

  @Override
  public Indication getById(Long id) {
    return this.indicationRepo.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Indicación no encontrada, id:"+id));
  }

  @Override
  public Page<Indication> getAll(Pageable pageable) {
    return this.indicationRepo.findAll(pageable);
  }

  @Override
  public Indication update(Indication indication) {
    this.verifyIndicationExist(indication.getIdIndication());
    return this.indicationRepo.save(indication);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyIndicationExist(id);
    this.indicationRepo.deleteById(id);
  }

  private void verifyIndicationExist(long id){
    boolean existIndication = this.indicationRepo.existsById(id);
    if(!existIndication) throw new EntityNotFoundException("Indicación no encontrada, id:"+id);
  }
}
