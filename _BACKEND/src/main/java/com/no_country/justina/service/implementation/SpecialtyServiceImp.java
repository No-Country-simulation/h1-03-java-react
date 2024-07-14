package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Specialty;
import com.no_country.justina.repository.SpecialtyRepository;
import com.no_country.justina.service.interfaces.ISpecialtyService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SpecialtyServiceImp implements ISpecialtyService {
  private final SpecialtyRepository specialtyRepo;
  @Override
  public Specialty create(Specialty specialty) {
    return this.specialtyRepo.save(specialty);
  }

  @Override
  public Specialty getById(Long id) {
    return this.specialtyRepo.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Especialidad no encontrada, id: "+id));
  }

  @Override
  public Page<Specialty> getAll(Pageable pageable) {
    return this.specialtyRepo.findAll(pageable);
  }

  @Override
  public Specialty update(Specialty specialty) {
    this.verifySpecialtyExist(specialty.getIdSpecialty());
    return this.specialtyRepo.save(specialty);
  }

  @Override
  public void deleteById(Long id) {
    this.verifySpecialtyExist(id);
    this.specialtyRepo.deleteById(id);
  }

  private void verifySpecialtyExist(long id){
    boolean exist = this.specialtyRepo.existsById(id);
    if(!exist) throw new EntityNotFoundException("Especialidad no encontrada, id: "+id);
  }
}
