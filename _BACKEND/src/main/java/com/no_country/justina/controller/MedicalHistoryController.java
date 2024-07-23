package com.no_country.justina.controller;

import com.no_country.justina.model.dto.MedicalHistoryReq;
import com.no_country.justina.model.dto.MedicalHistoryRes;
import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.enums.BloodType;
import com.no_country.justina.service.interfaces.IMedicalHistoryService;
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
public class MedicalHistoryController {
  private final IMedicalHistoryService historyService;

  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody MedicalHistoryReq medicalHistoryReq) {
    MedicalHistory newHistory = mapper.map(medicalHistoryReq, MedicalHistory.class);
    MedicalHistory savedHistory = this.historyService.create(newHistory);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(mapper.map(savedHistory, MedicalHistoryRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var historyFound = this.historyService.getById(id);
    var historyMap = mapper.map(historyFound, MedicalHistoryRes.class);
    return ResponseEntity.ok(historyMap);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction) {
    Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(direction), sort));
    return ResponseEntity.ok(this.historyService.getAll(pageable));
  }

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

  @GetMapping("/patient/{id}")
  public ResponseEntity<?> getByPatientId(@PathVariable Long id){
            var historyFound = this.historyService.getByPatientId(id);

    return ResponseEntity.ok(mapper.map(historyFound, MedicalHistoryRes.class));
  }
  @PutMapping
  public ResponseEntity<?> updateById(@RequestBody MedicalHistoryReq medicalHistoryReq) {
    var newHistory = mapper.map(medicalHistoryReq, MedicalHistory.class);
    var historyUpdated = this.historyService.update(newHistory);
    return ResponseEntity.ok(mapper.map(historyUpdated, MedicalHistoryRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.historyService.deleteById(id);
    return ResponseEntity.ok("Historia eliminada con éxito, id:" + id);
  }
}
