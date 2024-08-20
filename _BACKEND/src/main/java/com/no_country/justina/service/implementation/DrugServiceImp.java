package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Drug;
import com.no_country.justina.repository.DrugRepository;
import com.no_country.justina.service.interfaces.IDrugService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DrugServiceImp implements IDrugService {
  private final DrugRepository drugRepository;

  @Override
  public Drug create(Drug drug) {
    return this.drugRepository.save(drug);
  }

  @Override
  public Drug getById(Long id) {
    return this.drugRepository.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Medicamento no encontrado, id:"+id));
  }

  @Override
  public Page<Drug> getAll(Pageable pageable) {
    return this.drugRepository.findAll(pageable);
  }

  @Override
  public Drug update(Drug drug) {
    this.verifyDrugExist(drug.getId());
    return this.drugRepository.save(drug);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyDrugExist(id);
    this.drugRepository.deleteById(id);
  }

  @Override
  public Drug getByName(String name) {
    return this.drugRepository.findByNameIgnoreCase(name)
            .orElseThrow(()->new EntityNotFoundException("Medicamento no encontrado, nombre: "+name));
  }

  @Override
  public Page<Drug> getAllLikeName(Pageable pageable, String word) {
    if(word.length()<5) throw new IllegalArgumentException("Mínimo 4 caracteres en la palabra de búsqueda");
    return this.drugRepository.findByNameLikeIgnoreCase(word+"%", pageable);
  }

  private void verifyDrugExist(long id){
    boolean exist = this.drugRepository.existsById(id);
    if(!exist) throw new EntityNotFoundException("Medicamento no encontrado, id:"+id);
  }
}
