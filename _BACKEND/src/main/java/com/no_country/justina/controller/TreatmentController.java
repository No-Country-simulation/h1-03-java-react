package com.no_country.justina.controller;

import com.no_country.justina.model.dto.TreatmentReq;
import com.no_country.justina.model.dto.TreatmentRes;
import com.no_country.justina.model.entities.Treatment;
import com.no_country.justina.service.interfaces.ITreatmentService;
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

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base-url}/treatments")
@Tag(name = "Tratamientos")
@SecurityRequirement(name = "bearer-key")
public class TreatmentController {
  private final ITreatmentService treatmentService;
  private final ModelMapper mapper;

  @Operation(summary = "Crea un tratamiento.",
  description = "Disponible solo para el rol Doctor")
  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid TreatmentReq treatmentReq) {
    Treatment newTreatment = mapper.map(treatmentReq, Treatment.class);
    Treatment savedTreatment = this.treatmentService.create(newTreatment);
    return ResponseEntity.status(HttpStatus.CREATED)
            .body(mapper.map(savedTreatment, TreatmentRes.class));
  }

  @Operation(summary = "Trae todos los tratamiento paginados del usuario autenticado.",
  description = "Disponible para el rol PATIENT")
  @GetMapping("/current-user")
  public ResponseEntity<?> getAllByAuthUser(@RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "20") int size,
                                                  @RequestParam(defaultValue = "id") String sort,
                                                  @RequestParam(defaultValue = "asc") String direction,
                                                  Pageable pageable,
                                                  @RequestParam(required = false) Long doctorId,
                                                  @RequestParam(required = false) Long specialtyId,
                                                  @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)LocalDateTime start,
                                                  @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)LocalDateTime end) {
    Page<Treatment> treatmentsFound = this.treatmentService.getByHistorieForPatient(pageable,
            doctorId,
            specialtyId,
            start,
            end);
    Page<TreatmentRes> treatmentsRes = treatmentsFound.map(item -> mapper.map(item, TreatmentRes.class));
    return ResponseEntity.ok(treatmentsRes);
  }

  @Operation(summary = "Trae los tratamientos por id de historia",
          description = "Pasar en la ruta el id de la historia.\n La respuesta esta paginada"
  )

  @GetMapping("/historie/{id}")
  public ResponseEntity<?> getAllForHistorie(@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "20") int size,
                                             @RequestParam(defaultValue = "id") String sort,
                                             @RequestParam(defaultValue = "asc") String direction,
                                             Pageable pageable,
                                             @PathVariable("id") Long historieId) {
    Page<Treatment> treatmentsFound = this.treatmentService.getByHistorieForDoctor(historieId, pageable);
    Page<TreatmentRes> treatmentsRes = treatmentsFound.map(item -> mapper.map(item, TreatmentRes.class));
    return ResponseEntity.ok(treatmentsRes);
  }

  @Operation(summary = "Trae un tratamiento por su id",
          description = "Pasar el id por la ruta.")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var indicationFound = mapper.map(this.treatmentService.getById(id), Treatment.class);
    return ResponseEntity.ok(indicationFound);
  }

  @Operation(summary = "Trae todos tratamientos",
          description = "Usa Paginación.")
  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Treatment> result = this.treatmentService.getAll(pageable);
    Page<TreatmentRes> resultDto = result.map(item -> mapper.map(item, TreatmentRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @Operation(summary = "Trae los tratamientos paginado y usando filtros.",
          description = "Usa filtros por doctor, especialidad, historia clínica y un período.")
  @GetMapping("filters")
  public ResponseEntity<?> getAllByFilters(@RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "20") int size,
                                           @RequestParam(defaultValue = "id") String sort,
                                           @RequestParam(defaultValue = "asc") String direction,
                                           Pageable pageable,
                                           @RequestParam(required = false) Long doctorId,
                                           @RequestParam(required = false) Long historyId,
                                           @RequestParam(required = false) Long specialtyId,
                                           @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
                                           @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
    Page<Treatment> result = this.treatmentService.getAllByFilters(pageable, doctorId, historyId, specialtyId, start, end);
    Page<TreatmentRes> resultDto = result.map(item -> mapper.map(item, TreatmentRes.class));
    return ResponseEntity.ok(resultDto);
  }
}
