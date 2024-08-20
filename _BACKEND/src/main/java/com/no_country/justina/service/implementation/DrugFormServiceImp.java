package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.DrugForm;
import com.no_country.justina.repository.DrugFormRepository;
import com.no_country.justina.service.interfaces.IDrugFormService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DrugFormServiceImp implements IDrugFormService {
  private final DrugFormRepository formRepository;

  @Override
  public DrugForm create(DrugForm drugForm) {
    return this.formRepository.save(drugForm);
  }

  @Override
  public DrugForm getById(Long id) {
    return this.formRepository.findById(id)
            .orElseThrow(()->new EntityNotFoundException("DrugForm no encontrado, id: "+id));
  }

  @Override
  public Page<DrugForm> getAll(Pageable pageable) {
    return this.formRepository.findAll(pageable);
  }

  @Override
  public DrugForm update(DrugForm drugForm) {
    this.verifyExist(drugForm.getId());
    return this.formRepository.save(drugForm);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyExist(id);
    this.formRepository.deleteById(id);
  }

  private void verifyExist(long id){
    boolean exist = this.formRepository.existsById(id);
    if(!exist) throw new EntityNotFoundException("DrugRoute no encontrado, id: "+id);
  }
}
