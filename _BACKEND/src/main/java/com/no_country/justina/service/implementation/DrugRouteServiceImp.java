package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.DrugRoute;
import com.no_country.justina.repository.DrugRouteRepository;
import com.no_country.justina.service.interfaces.IDrugRouteService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DrugRouteServiceImp implements IDrugRouteService {
  private final DrugRouteRepository routeRepository;
  @Override
  public DrugRoute create(DrugRoute drugRoute) {
    return this.routeRepository.save(drugRoute);
  }

  @Override
  public DrugRoute getById(Long id) {
    return this.routeRepository.findById(id)
            .orElseThrow(()->new EntityNotFoundException("id no encontrado: "+id));
  }

  @Override
  public Page<DrugRoute> getAll(Pageable pageable) {
    return this.routeRepository.findAll(pageable);
  }

  @Override
  public DrugRoute update(DrugRoute drugRoute) {
    this.verifyExist(drugRoute.getId());
    return this.routeRepository.save(drugRoute);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyExist(id);
    this.routeRepository.deleteById(id);
  }

  private void verifyExist(long id){
    boolean exist = this.routeRepository.existsById(id);
    if(!exist) throw new EntityNotFoundException("DrugRoute no encontrado, id: "+id);
  }
}
