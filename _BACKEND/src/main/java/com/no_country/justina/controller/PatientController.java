package com.no_country.justina.controller;

import com.no_country.justina.model.dto.PatientReq;
import com.no_country.justina.model.dto.PatientRes;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.service.interfaces.IPatientService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/patient")
@RequiredArgsConstructor
public class PatientController {
  private final IPatientService patientServ;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody PatientReq patientReq) {
    Patient newPatient = mapper.map(patientReq, Patient.class);
    Patient savedPatient = this.patientServ.create(newPatient);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(mapper.map(savedPatient, PatientRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var patientFound = mapper.map(this.patientServ.getById(id), PatientRes.class);
    return ResponseEntity.ok(patientFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction) {
    Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(direction), sort));
    return ResponseEntity.ok(this.patientServ.getAll(pageable));
  }
  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody PatientReq patientReq,
                                      @PathVariable long id){
    var newPatient = mapper.map(patientReq, Patient.class);
    newPatient.setIdPatient(id);
    var patientUpdated = this.patientServ.update(newPatient);
    return ResponseEntity.ok(mapper.map(patientUpdated, PatientRes.class));
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id){
    this.patientServ.deleteById(id);
    return ResponseEntity.ok("Paciente de baja con éxito, id:"+id);
  }
}