package com.no_country.justina.controller;

import com.no_country.justina.model.dto.DateRange;
import com.no_country.justina.model.dto.ShiftReq;
import com.no_country.justina.model.dto.ShiftRes;
import com.no_country.justina.model.entities.Shift;
import com.no_country.justina.service.interfaces.IShiftService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.base-url}/shift")
@RequiredArgsConstructor
public class ShiftController {
  private final IShiftService shiftService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid ShiftReq shiftReq) {
    Shift newShift = mapper.map(shiftReq, Shift.class);
    Shift savedShift = this.shiftService.create(newShift);
    return ResponseEntity
            .status(HttpStatus.CREATED).body(mapper.map(savedShift, ShiftRes.class));
  }

  @PostMapping("/month")
  public ResponseEntity<?> createByMonthAndDoctor(@RequestBody @Valid List<@Valid ShiftReq> shiftsReq) {
    List<Shift> newShifts = shiftsReq.stream()
            .map(shift->mapper.map(shift, Shift.class))
            .toList();
    List<Shift> savedShifts = this.shiftService.createShiftMonth(newShifts);

    List<ShiftRes> savedShiftsDto = savedShifts.stream()
            .map(shift->mapper.map(shift, ShiftRes.class))
            .toList();
    return ResponseEntity
            .status(HttpStatus.CREATED).body(savedShiftsDto);
  }


  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var shiftFound = mapper.map(this.shiftService.getById(id), Shift.class);
    return ResponseEntity.ok(shiftFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "idShift") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Shift> result = this.shiftService.getAll(pageable);
    Page<ShiftRes> resultDto = result.map(item -> mapper.map(item, ShiftRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PostMapping("/filter")
  public ResponseEntity<?> getAllByDoctorOrSpecialty(@RequestParam(defaultValue = "0") int page,
                                                     @RequestParam(defaultValue = "20") int size,
                                                     @RequestParam(defaultValue = "idShift") String sort,
                                                     @RequestParam(defaultValue = "asc") String direction,
                                                     @RequestParam(required = false) Long doctorId,
                                                     @RequestParam(required = false) String specialty,
                                                     @RequestBody @Valid DateRange range,
                                                     Pageable pageable){
    Page<Shift> result = this.shiftService.getAllByDoctorOrSpecialtyBetweenDates(
            pageable, doctorId, specialty, range.getStart(), range.getEnd());
    Page<ShiftRes> resultDto = result.map(item -> mapper.map(item, ShiftRes.class));
    return ResponseEntity.ok(resultDto);
  }


  @GetMapping("/month/{doctorId}")
  public ResponseEntity<?> getAllByDoctorMonth(@PathVariable long doctorId,
                                               @RequestParam(defaultValue = "#{T(java.time.LocalDate).now().getYear()}") int year,
                                               @RequestParam(defaultValue = "#{T(java.time.LocalDate).now().getMonthValue()}")int month
                                               ){
    var shifts = this.shiftService.getAllByDoctorMonth(doctorId, year, month);
    var shiftsDto = shifts.stream().map(shift->mapper.map(shift, ShiftRes.class));
    return ResponseEntity.ok(shiftsDto);
  }

  @GetMapping("/specialty/{specialty}")
  public ResponseEntity<?> getAllBySpecialtyMonth(@PathVariable String specialty,
                                               @RequestParam(defaultValue = "#{T(java.time.LocalDate).now().getYear()}") int year,
                                               @RequestParam(defaultValue = "#{T(java.time.LocalDate).now().getMonthValue()}")int month
                                               ){
    var shifts = this.shiftService.getAllBySpecialtyMonth(specialty, year, month);
    var shiftsDto = shifts.stream().map(shift->mapper.map(shift, ShiftRes.class));
    return ResponseEntity.ok(shiftsDto);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody ShiftReq shiftReq,
                                      @PathVariable long id) {
    var newShift = mapper.map(shiftReq, Shift.class);
    newShift.setIdShift(id);
    var treatmentUpdated = this.shiftService.update(newShift);
    return ResponseEntity.ok(mapper.map(treatmentUpdated, ShiftRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.shiftService.deleteById(id);
    return ResponseEntity.ok("Turno eliminado con éxito, id:" + id);
  }
}
