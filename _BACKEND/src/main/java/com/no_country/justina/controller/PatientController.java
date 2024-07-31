package com.no_country.justina.controller;

import com.no_country.justina.model.dto.PatientReq;
import com.no_country.justina.model.dto.PatientRes;
import com.no_country.justina.model.dto.PatientUpdateReq;
import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.service.interfaces.IMedicalHistoryService;
import com.no_country.justina.service.interfaces.IPatientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/patients")
@RequiredArgsConstructor
@Tag(name = "Pacientes", description = "Solo disponible para usuarios con role PATIENT")
@SecurityRequirement(name = "bearer-key")
public class PatientController {
  private final IPatientService patientServ;
  private final IMedicalHistoryService historyService;
  private final ModelMapper mapper;

  @PostMapping
  @Operation(summary = "crea un paciente")
  public ResponseEntity<?> create(@RequestBody @Valid PatientReq patientReq) {
    Patient newPatient = mapper.map(patientReq, Patient.class);
    Patient savedPatient = this.patientServ.create(newPatient);
    MedicalHistory newHistory = mapper.map(patientReq, MedicalHistory.class);
    newHistory.setPatient(savedPatient);
    this.historyService.create(newHistory);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(mapper.map(savedPatient, PatientRes.class));
  }

  @Operation(summary = "Trae un paciente por su id", description = "Pasar el id en la ruta")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var patientFound = this.patientServ.getById(id);
    var patientMap = mapper.map(patientFound, PatientRes.class);
    return ResponseEntity.ok(patientMap);
  }
  @Operation(summary = "Trae todos lo paciente paginado")
  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "idPatient") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Patient> patients = this.patientServ.getAll(pageable);
    Page<PatientRes> patientsDto = patients.map(item->mapper.map(item, PatientRes.class));
    return ResponseEntity.ok(patientsDto);
  }
  @Operation(summary = "Actualiza un paciente", description = "Actualiza un paciente usando el id del payload.")
  @PutMapping()
  public ResponseEntity<?> updateById(@RequestBody @Valid PatientUpdateReq patientUpdateReq){
    var patientUpdated = this.patientServ.update(mapper.map(patientUpdateReq, Patient.class));
    return ResponseEntity.ok(mapper.map(patientUpdated, PatientRes.class));
  }
}