package com.no_country.justina.controller;

import com.no_country.justina.model.dto.MedicalHistoryReq;
import com.no_country.justina.model.dto.MedicalHistoryRes;
import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.enums.BloodType;
import com.no_country.justina.service.interfaces.IMedicalHistoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@RestController
@RequestMapping("${api.base-url}/medical-histories")
@Tag(name = "Historia clínica")
@SecurityRequirement(name = "bearer-key")
public class MedicalHistoryController {
  private final IMedicalHistoryService historyService;
  private final ModelMapper mapper;

//  @Operation(summary = "Crea una historia")
//  @PostMapping
//  public ResponseEntity<?> create(@RequestBody MedicalHistoryReq medicalHistoryReq) {
//    MedicalHistory newHistory = mapper.map(medicalHistoryReq, MedicalHistory.class);
//    MedicalHistory savedHistory = this.historyService.create(newHistory);
//    return ResponseEntity
//            .status(HttpStatus.CREATED)
//            .body(mapper.map(savedHistory, MedicalHistoryRes.class));
//  }
  @Operation(summary = "Trae una historia por su id", description = "Disponible solo para DOCTOR")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var historyFound = this.historyService.getById(id);
    var historyMap = mapper.map(historyFound, MedicalHistoryRes.class);
    return ResponseEntity.ok(historyMap);
  }

  @Operation(summary = "Trae la historia del usuario autenticado",
          description = "Disponible solo para PATIENT")
  @GetMapping("/current")
  public ResponseEntity<?> getCurrent(){
    MedicalHistory historyFound = this.historyService.getByCurrentPatient();
    var historyMap = mapper.map(historyFound, MedicalHistoryRes.class);
    return ResponseEntity.ok(historyMap);
  }
  @Operation(summary = "Trae todas las historias paginadas.", description = "Disponible solo para DOCTOR")
  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction) {
    Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(direction), sort));
    return ResponseEntity.ok(this.historyService.getAll(pageable));
  }

  @Operation(summary = "Trae todas las historias paginadas y por filtros.",
  description = "Usa filtros como apellido, doc identidad y periodo en que se creo. Disponible solo para DOCTOR")
  @GetMapping("/filter")
  public ResponseEntity<?> getAllByLastnameOrIdentity(
          @RequestParam(defaultValue = "0") int page,
          @RequestParam(defaultValue = "20") int size,
          @RequestParam(defaultValue = "id") String sort,
          @RequestParam(defaultValue = "asc") String direction,
          Pageable pageable,
          @RequestParam(required = false) String lastname,
          @RequestParam(required = false) String docIdentity,
          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end
  ) {
    Page<MedicalHistory> result = this.historyService.getAllByIdentityLastname(pageable, lastname, docIdentity, start, end);
    Page<MedicalHistoryRes> historyDto = result.map(item -> this.mapper.map(item, MedicalHistoryRes.class));
    return ResponseEntity.ok(historyDto);
  }

  @Operation(summary = "Trae una historia por su id del paciente", description = "Disponible solo para DOCTOR")
  @GetMapping("/patient/{id}")
  public ResponseEntity<?> getByPatientId(@PathVariable Long id){
            var historyFound = this.historyService.getByPatientId(id);

    return ResponseEntity.ok(mapper.map(historyFound, MedicalHistoryRes.class));
  }
  @Operation(summary = "Actualiza una historia",
          description = "Actualiza una historia usando el id del body. Disponible solo para DOCTOR")
  @PutMapping
  public ResponseEntity<?> updateById(@RequestBody MedicalHistoryReq medicalHistoryReq) {
    var newHistory = mapper.map(medicalHistoryReq, MedicalHistory.class);
    var historyUpdated = this.historyService.update(newHistory);
    return ResponseEntity.ok(mapper.map(historyUpdated, MedicalHistoryRes.class));
  }

  //  @DeleteMapping("/{id}")
  //  public ResponseEntity<?> deleteById(@PathVariable long id) {
  //    this.historyService.deleteById(id);
  //    return ResponseEntity.ok("Historia eliminada con éxito, id:" + id);
  //  }
}
