package com.no_country.justina.controller;

import com.no_country.justina.model.dto.TreatmentReq;
import com.no_country.justina.model.dto.TreatmentRes;
import com.no_country.justina.model.entities.Treatment;
import com.no_country.justina.service.interfaces.ITreatmentService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base-url}/treatments")
public class TreatmentController {
  private final ITreatmentService treatmentService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid TreatmentReq treatmentReq) {
    Treatment newTreatment = mapper.map(treatmentReq, Treatment.class);
    Treatment savedTreatment = this.treatmentService.create(newTreatment);
    return ResponseEntity.status(HttpStatus.CREATED)
            .body(mapper.map(savedTreatment, TreatmentRes.class));
  }

  @GetMapping("/current-user")
  public ResponseEntity<?> getAllByMedicalHistory(@RequestParam(defaultValue = "0") int page,
                                                  @RequestParam(defaultValue = "20") int size,
                                                  @RequestParam(defaultValue = "id") String sort,
                                                  @RequestParam(defaultValue = "asc") String direction,
                                                  Pageable pageable) {
    Page<Treatment> treatmentsFound = this.treatmentService.getByHistorieForPatient(pageable);
    Page<TreatmentRes> treatmentsRes = treatmentsFound.map(item -> mapper.map(item, TreatmentRes.class));
    return ResponseEntity.ok(treatmentsRes);
  }

  @GetMapping("/historie/{historie}")
  public ResponseEntity<?> getAllForHistorie(@RequestParam(defaultValue = "0") int page,
                                             @RequestParam(defaultValue = "20") int size,
                                             @RequestParam(defaultValue = "id") String sort,
                                             @RequestParam(defaultValue = "asc") String direction,
                                             Pageable pageable,
                                             @PathVariable Long historieId) {
    Page<Treatment> treatmentsFound = this.treatmentService.getByHistorieForDoctor(historieId, pageable);
    Page<TreatmentRes> treatmentsRes = treatmentsFound.map(item -> mapper.map(item, TreatmentRes.class));
    return ResponseEntity.ok(treatmentsRes);
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var indicationFound = mapper.map(this.treatmentService.getById(id), Treatment.class);
    return ResponseEntity.ok(indicationFound);
  }

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
                                           @RequestParam(required = false) LocalDateTime start,
                                           @RequestParam(required = false) LocalDateTime end) {
    Page<Treatment> result = this.treatmentService.getAllByFilters(pageable, doctorId, historyId, specialtyId, start, end);
    Page<TreatmentRes> resultDto = result.map(item -> mapper.map(item, TreatmentRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PutMapping
  public ResponseEntity<?> updateById(@RequestBody TreatmentReq treatmentReq) {
    var newTreatment = mapper.map(treatmentReq, Treatment.class);
    var treatmentUpdated = this.treatmentService.update(newTreatment);
    return ResponseEntity.ok(mapper.map(treatmentUpdated, TreatmentRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.treatmentService.deleteById(id);
    return ResponseEntity.ok("Tratamiento eliminado con éxito, id:" + id);
  }
}
