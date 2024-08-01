package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.ShiftException;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.Shift;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.ShiftRepository;
import com.no_country.justina.service.interfaces.IDoctorService;
import com.no_country.justina.service.interfaces.IShiftService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ShiftServiceImp implements IShiftService {
  private final ShiftRepository shiftRepository;
  private final IDoctorService doctorService;

  @Override
  public Shift create(Shift shift) {
    this.verifyValidTimeShift(shift);
    this.verifyShiftHourByDay(shift);
    this.verifyShiftIsAfterToday(shift);
    List<Shift> shiftsByDay = this.shiftRepository.findByDayAndDoctor(
            shift.getDoctor().getId(),
            shift.getStartDate().getYear(),
            shift.getStartDate().getMonthValue(),
            shift.getStartDate().getDayOfMonth());
    shiftsByDay.add(shift);
    this.verifyOverlappingShiftsDay(shiftsByDay);
    return this.shiftRepository.save(shift);
  }

  @Override
  public List<Shift> createShiftMonth(List<Shift> shifts) {
    var orderShifts = new ArrayList<>(shifts);
    orderShifts.sort(Comparator.comparing(Shift::getStartDate));
    this.verifyAllShiftsSameDoctor(orderShifts);
    this.verifyAllShiftsSameYearAndMonth(orderShifts);
    Doctor doctor = this.doctorService.getDoctor(orderShifts.get(1).getDoctor().getId());
    orderShifts.forEach(shift -> {
      shift.setSpecialty(doctor.getSpecialty());
      this.verifyValidTimeShift(shift);
      this.verifyShiftHourByDay(shift);
      this.verifyShiftIsAfterToday(shift);
    });

    LocalDateTime dateShifts = orderShifts.get(1).getStartDate();
    var currentShifts = this.shiftRepository.findByDoctorAndMonth(doctor.getId(),
            dateShifts.getYear(),
            dateShifts.getMonthValue());
    List<Shift> newShifts = new ArrayList<Shift>(orderShifts);
    newShifts.addAll(currentShifts);
    var shiftsGroupByDay = this.sliceShiftsByDay(newShifts);
    shiftsGroupByDay.forEach(this::verifyOverlappingShiftsDay);
    return orderShifts.stream().map(this.shiftRepository::save).toList();
  }

  @Override
  public Shift getById(Long id) {
    return this.shiftRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Turno Medico no encontrado, id: " + id));
  }

  @Override
  public Page<Shift> getAll(Pageable pageable) {
    return this.shiftRepository.findAll(pageable);
  }

  @Override
  public Shift update(Shift shift) {
    this.verifyShiftExist(shift.getId());
    return this.shiftRepository.save(shift);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyShiftExist(id);
    this.shiftRepository.deleteById(id);
  }

  @Override
  public List<Shift> getAllByDoctorMonth(long doctorId, int year, int month) {
    return this.shiftRepository.findByDoctorAndMonth(doctorId, year, month);
  }

  @Override
  public List<Shift> getAllBySpecialtyMonth(String specialty, int year, int month) {
    return this.shiftRepository.findBySpecialtyAndMonth(specialty, year, month);
  }

  @Override
  public Page<Shift> getAllByDoctorOrSpecialtyBetweenDates(Pageable pageable,
                                                           Long doctorId,
                                                           Long specialtyId,
                                                           LocalDateTime start,
                                                           LocalDateTime end) {
    if (start != null && end != null) {
      if (start.isAfter(end)) {
        throw new IllegalArgumentException("La fecha de inicio debe ser anterior a la fecha de término.");
      }
      if (start.getYear() != end.getYear()) {
        throw new IllegalArgumentException("Los rangos de horario deben ser del mismo año.");
      }
    }
    return this.shiftRepository.findAllByDoctorOrSpecialty(
            pageable, doctorId, specialtyId, start, end);
  }


  @Override
  public void updateAppointmentAvailable(long idShift, int quantity) {
    var result = this.shiftRepository.updateAppointmentShift(idShift, quantity);
    if (result == 0) {
      throw new ShiftException("Ningún registro de turnos fue actualizado.");
    }
  }

  @Override
  public Shift getCloserByDoctor(){
    UserEntity user = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    Doctor doctorAuth = this.doctorService.getByUserId(user.getId());
    var closeShift = this.shiftRepository.getCloseByDoctorAndDate(doctorAuth.getId(), LocalDateTime.now());
    return closeShift.orElseThrow(()->new ShiftException("No hay turnos próximos."));
  }

  private void verifyShiftExist(long id) {
    boolean exist = this.shiftRepository.existsById(id);
    if (!exist) throw new EntityNotFoundException("Turno no encontrado, id: " + id);
  }

  private void verifyAllShiftsSameDoctor(List<Shift> shifts) {
    Doctor doctor = shifts.get(1).getDoctor();
    boolean isValidShifts = shifts.stream().allMatch(
            shift -> Objects.equals(shift.getDoctor().getId(), doctor.getId()));
    if (!isValidShifts) {
      throw new IllegalArgumentException("Todos los turnos deben ser del mismo doctor.");
    }
  }

  private void verifyAllShiftsSameYearAndMonth(List<Shift> shifts) {
    LocalDateTime dateShifts = shifts.get(1).getStartDate();
    boolean validShifts = shifts.stream().allMatch(
            shift -> shift.getStartDate().getMonth().getValue() == dateShifts.getMonth().getValue());
    if (!validShifts) {
      throw new IllegalArgumentException("Todos los turnos deben ser del mismo mes.");
    }
  }

  private void verifyValidTimeShift(Shift shift) {
    if (!shift.getStartDate().isBefore(shift.getEndDate())) {
      throw new IllegalArgumentException("Turno con horario invalido, date:" + shift.getStartDate());
    }
  }

  private void verifyShiftHourByDay(Shift shift) {
    boolean isValidShift = Duration.between(shift.getStartDate(), shift.getEndDate()).toHours() <= 8;
    if (!isValidShift) {
      throw new IllegalArgumentException("Los turnos no pueden exceder las 8 horas");
    }
  }

  private void verifyOverlappingShiftsDay(List<Shift> shifts) {
    List<Shift> orderShifts = new ArrayList<>(shifts);
    orderShifts.sort(Comparator.comparing(Shift::getStartDate));
    for (int i = 1; i < orderShifts.size(); i++) {
      Shift previous = orderShifts.get(i - 1);
      Shift current = orderShifts.get(i);
      if (current.getStartDate().isBefore(previous.getEndDate())) {
        throw new IllegalArgumentException("Los turnos en el dia " + current.getStartDate() + " se superponen horarios.");
      }
    }
  }

  private void verifyShiftIsAfterToday(Shift shift) {
    if (!shift.getStartDate().toLocalDate().isAfter(LocalDate.now())) {
      throw new IllegalArgumentException("No se pueden crear turnos para el mismo dia ni antes.");
    }
  }

  private List<List<Shift>> sliceShiftsByDay(List<Shift> shifts) {
    Map<LocalDate, List<Shift>> shiftsByDay = shifts.stream().collect(
            Collectors.groupingBy(shift -> shift.getStartDate().toLocalDate()));
    return shiftsByDay.values().stream().toList();
  }
}
