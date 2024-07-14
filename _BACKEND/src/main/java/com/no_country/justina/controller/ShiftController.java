package com.no_country.justina.controller;

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
            .status(HttpStatus.CREATED).body("hola");
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
    Page<ShiftRes> resultDto = result.map(item -> mapper.map(result, ShiftRes.class));
    return ResponseEntity.ok(resultDto);
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
