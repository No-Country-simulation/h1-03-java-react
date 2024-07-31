package com.no_country.justina.controller;

import com.no_country.justina.model.dto.PrescriptionReq;
import com.no_country.justina.model.dto.PrescriptionRes;
import com.no_country.justina.model.entities.Prescription;
import com.no_country.justina.service.interfaces.IPrescriptionService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@RestController
@RequestMapping("${api.base-url}/prescriptions")
public class PrescriptionController {
  private final IPrescriptionService prescriptionService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody PrescriptionReq prescriptionReq) {
    Prescription newPrescription = mapper.map(prescriptionReq, Prescription.class);
    Prescription savedPrescription = this.prescriptionService.create(newPrescription);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(mapper.map(savedPrescription, PrescriptionRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var prescriptionFound = mapper.map(this.prescriptionService.getById(id), PrescriptionRes.class);
    return ResponseEntity.ok(prescriptionFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Prescription> prescriptions = this.prescriptionService.getAll(pageable);
    Page<PrescriptionRes> prescriptionsRes = prescriptions.map(item->mapper.map(item, PrescriptionRes.class));
    return ResponseEntity.ok(prescriptionsRes);
  }

  @GetMapping("/current-user")
  public ResponseEntity<?> getAllCurrent(@RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "20") int size,
                                         @RequestParam(defaultValue = "id") String sort,
                                         @RequestParam(defaultValue = "asc") String direction,
                                         Pageable pageable,
                                         @RequestParam(required = false) Long doctorId,
                                         @RequestParam(required = false) Long specialtyId,
                                         @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
                                         @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {

    Page<Prescription> prescriptions = this.prescriptionService.getAllCurrent(pageable, doctorId,specialtyId, start, end );
    Page<PrescriptionRes> prescriptionsRes = prescriptions.map(item->mapper.map(item, PrescriptionRes.class));
    return ResponseEntity.ok(prescriptionsRes);
  }

  @Operation(summary = "Trae todas las recetas por filtros y paginadas.",
          description = "Usa filtros como id del doctor, paciente, especialidad y por periodo de creación.")
  @GetMapping("/filter")
  public ResponseEntity<?> getAllByFilters(@RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "20") int size,
                                           @RequestParam(defaultValue = "id") String sort,
                                           @RequestParam(defaultValue = "asc") String direction,
                                           Pageable pageable,
                                           @RequestParam(required = false) Long doctorId,
                                           @RequestParam(required = false) Long patientId,
                                           @RequestParam(required = false) Long specialtyId,
                                           @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
                                           @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
    return ResponseEntity.ok(this.prescriptionService.getAllFilters(pageable, doctorId, patientId, specialtyId, start, end));
  }

  @PutMapping
  public ResponseEntity<?> updateById(@RequestBody PrescriptionReq prescriptionReq) {
    var newPrescription = mapper.map(prescriptionReq, Prescription.class);
    var prescriptionUpdated = this.prescriptionService.update(newPrescription);
    return ResponseEntity.ok(mapper.map(prescriptionUpdated, PrescriptionRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.prescriptionService.deleteById(id);
    return ResponseEntity.ok("Prescripción eliminada con éxito, id:" + id);
  }
}
