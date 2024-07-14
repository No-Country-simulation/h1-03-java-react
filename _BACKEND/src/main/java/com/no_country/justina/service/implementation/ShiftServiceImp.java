package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Shift;
import com.no_country.justina.repository.ShiftRepository;
import com.no_country.justina.service.interfaces.IShiftService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ShiftServiceImp implements IShiftService {
  private final ShiftRepository shiftRepository;

  @Override
  public Shift create(Shift shift) {
    return this.shiftRepository.save(shift);
  }

  @Override
  public Shift getById(Long id) {
    return this.shiftRepository.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Turno no encontrado, id: "+id));
  }

  @Override
  public Page<Shift> getAll(Pageable pageable) {
    return this.shiftRepository.findAll(pageable);
  }

  @Override
  public Shift update(Shift shift) {
    this.verifyShiftExist(shift.getIdShift());
    return this.shiftRepository.save(shift);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyShiftExist(id);
    this.shiftRepository.deleteById(id);
  }

  private void verifyShiftExist(long id){
    boolean exist = this.shiftRepository.existsById(id);
    if(!exist) throw new EntityNotFoundException("Turno no encontrado, id: "+id);
  }
}
