package com.no_country.justina.controller;

import com.no_country.justina.model.dto.SpecialtyReq;
import com.no_country.justina.model.dto.SpecialtyRes;
import com.no_country.justina.model.entities.Specialty;
import com.no_country.justina.service.interfaces.ISpecialtyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/specialties")
@RequiredArgsConstructor
public class SpecialtyController {
  private final ISpecialtyService specialtyService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid SpecialtyReq specialtyReq) {
    Specialty newSpecialty = mapper.map(specialtyReq, Specialty.class);
    Specialty savedSpecialty = this.specialtyService.create(newSpecialty);

    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(this.mapper.map(savedSpecialty, SpecialtyRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var specialtyFound = mapper.map(this.specialtyService.getById(id), Specialty.class);
    return ResponseEntity.ok(specialtyFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Specialty> result = this.specialtyService.getAll(pageable);
    Page<SpecialtyRes> resultDto = result.map(item -> mapper.map(item, SpecialtyRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody SpecialtyReq treatmentReq,
                                      @PathVariable long id) {
    var newSpecialty = mapper.map(treatmentReq, Specialty.class);
    newSpecialty.setId(id);
    var specialtyUpdated = this.specialtyService.update(newSpecialty);
    return ResponseEntity.ok(mapper.map(specialtyUpdated, SpecialtyRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.specialtyService.deleteById(id);
    return ResponseEntity.ok("Especialidad eliminada con éxito, id:" + id);
  }
}
