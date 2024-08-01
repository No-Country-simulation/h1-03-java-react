package com.no_country.justina.controller;

import com.no_country.justina.model.dto.ShiftReq;
import com.no_country.justina.model.dto.ShiftRes;
import com.no_country.justina.model.entities.Shift;
import com.no_country.justina.service.interfaces.IShiftService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("${api.base-url}/shifts")
@RequiredArgsConstructor
@Tag(name="Turnos Medicos")
@SecurityRequirement(name = "bearer-key")
public class ShiftController {
  private final IShiftService shiftService;
  private final ModelMapper mapper;

  @Operation(summary = "Crea un turno medico", description = "Temporalmente disponible para usuario con rol DOCTOR")
  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid ShiftReq shiftReq) {
    Shift newShift = mapper.map(shiftReq, Shift.class);
    Shift savedShift = this.shiftService.create(newShift);
    return ResponseEntity
            .status(HttpStatus.CREATED).body(mapper.map(savedShift, ShiftRes.class));
  }

  @Operation(summary = "Crea un conjunto de turnos",
  description = "Valida que los turnos no se superpongan, que sean de un mismo doctor, especialidad,y mismo mes-año." +
          "\nTemporalmente disponible para usuario con rol DOCTOR")
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

  @Operation(summary = "Trae un turno por su id")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var shiftFound = mapper.map(this.shiftService.getById(id), ShiftRes.class);
    return ResponseEntity.ok(shiftFound);
  }

  @Operation(summary = "Trae todos los turnos paginados.")
  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Shift> result = this.shiftService.getAll(pageable);
    Page<ShiftRes> resultDto = result.map(item -> mapper.map(item, ShiftRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @Operation(summary = "Trae los turnos con filtros y paginado.",
          description = "Usa filtros por doctor, especialidad y periodo de tiempo")
  @GetMapping("/filter")
  public ResponseEntity<?> getAllByDoctorOrSpecialty(@RequestParam(defaultValue = "0") int page,
                                                     @RequestParam(defaultValue = "20") int size,
                                                     @RequestParam(defaultValue = "id") String sort,
                                                     @RequestParam(defaultValue = "asc") String direction,
                                                     @RequestParam(required = false) Long doctorId,
                                                     @RequestParam(required = false) Long specialty,
                                                     @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
                                                     @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end,
                                                     Pageable pageable){
    Page<Shift> result = this.shiftService.getAllByDoctorOrSpecialtyBetweenDates(
            pageable, doctorId, specialty, start, end);
    Page<ShiftRes> resultDto = result.map(item -> mapper.map(item, ShiftRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @Operation(summary = "Trae los turnos por parámetros específicos.",
          description = "Usa filtros como doctor, mes y año")
  @GetMapping("/month/{doctorId}")
  public ResponseEntity<?> getAllByDoctorMonth(@PathVariable long doctorId,
                                               @RequestParam(defaultValue = "#{T(java.time.LocalDate).now().getYear()}") int year,
                                               @RequestParam(defaultValue = "#{T(java.time.LocalDate).now().getMonthValue()}")int month
                                               ){
    var shifts = this.shiftService.getAllByDoctorMonth(doctorId, year, month);
    var shiftsDto = shifts.stream().map(shift->mapper.map(shift, ShiftRes.class));
    return ResponseEntity.ok(shiftsDto);
  }
  @Operation(summary = "Trae los turnos por parámetros específicos.",
          description = "Usa filtros como especialidad, mes y año")
  @GetMapping("/specialty/{specialty}")
  public ResponseEntity<?> getAllBySpecialtyMonth(@PathVariable String specialty,
                                               @RequestParam(defaultValue = "#{T(java.time.LocalDate).now().getYear()}") int year,
                                               @RequestParam(defaultValue = "#{T(java.time.LocalDate).now().getMonthValue()}")int month
                                               ){
    var shifts = this.shiftService.getAllBySpecialtyMonth(specialty, year, month);
    var shiftsDto = shifts.stream().map(shift->mapper.map(shift, ShiftRes.class));
    return ResponseEntity.ok(shiftsDto);
  }

  @Operation(summary = "Trae el turno medico mas próximo del usuario autenticado.",
  description = "Disponible solo para el rol DOCTOR")
  @GetMapping("/current-user/close")
  public ResponseEntity<?> getCloseByCurrentUser(){
    var shiftFound = this.shiftService.getCloserByDoctor();
    return ResponseEntity.ok(mapper.map(shiftFound, ShiftRes.class));
  }

//  @Operation(summary = "Actualiza un turno", description = "Actualiza usando el id del body. No es un endpoint funcional no testear.")
//  @PutMapping
//  public ResponseEntity<?> updateById(@RequestBody ShiftReq shiftReq) {
//    var newShift = mapper.map(shiftReq, Shift.class);
//    var treatmentUpdated = this.shiftService.update(newShift);
//    return ResponseEntity.ok(mapper.map(treatmentUpdated, ShiftRes.class));
//  }
//  @Operation(summary = "Elimina un turno por id", description = "No es funcional no testear")
//  @DeleteMapping("/{id}")
//  public ResponseEntity<?> deleteById(@PathVariable long id) {
//    this.shiftService.deleteById(id);
//    return ResponseEntity.ok("Turno eliminado con éxito, id:" + id);
//  }
}
