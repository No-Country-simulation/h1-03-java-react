package com.no_country.justina.controller;

import com.no_country.justina.model.dto.PatientReq;
import com.no_country.justina.model.dto.PatientRes;
import com.no_country.justina.model.dto.PatientUpdateReq;
import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.service.interfaces.IPatientService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/patients")
@RequiredArgsConstructor
public class PatientController {
  private final IPatientService patientServ;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid PatientReq patientReq) {
    Patient newPatient = mapper.map(patientReq, Patient.class);
    MedicalHistory newHistory = mapper.map(patientReq, MedicalHistory.class);
    Patient savedPatient = this.patientServ.create(newPatient, newHistory);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(mapper.map(savedPatient, PatientRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var patientFound = this.patientServ.getById(id);
    var patientMap = mapper.map(patientFound, PatientRes.class);
    return ResponseEntity.ok(patientMap);
  }

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
  @PutMapping()
  public ResponseEntity<?> updateById(@RequestBody @Valid PatientUpdateReq patientUpdateReq){
    var patientUpdated = this.patientServ.update(mapper.map(patientUpdateReq, Patient.class));
    return ResponseEntity.ok(mapper.map(patientUpdated, PatientRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id){
    this.patientServ.deleteById(id);
    return ResponseEntity.ok("Paciente de baja con éxito, id:"+id);
  }
}