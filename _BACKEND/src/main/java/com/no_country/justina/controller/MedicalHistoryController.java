package com.no_country.justina.controller;

import com.no_country.justina.model.dto.MedicalHistoryReq;
import com.no_country.justina.model.dto.MedicalHistoryRes;
import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.service.interfaces.IMedicalHistoryService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("${api.base-url}/history")
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
    var historyFound = mapper.map(this.historyService.getById(id), MedicalHistoryRes.class);
    return ResponseEntity.ok(historyFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction) {
    Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(direction), sort));
    return ResponseEntity.ok(this.historyService.getAll(pageable));
  }
  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody MedicalHistoryReq medicalHistoryReq,
                                      @PathVariable long id){
    var newHistory = mapper.map(medicalHistoryReq, MedicalHistory.class);
    newHistory.setIdMedicalHistory(id);
    var historyUpdated = this.historyService.update(newHistory);
    return ResponseEntity.ok(mapper.map(historyUpdated, MedicalHistoryRes.class));
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id){
    this.historyService.deleteById(id);
    return ResponseEntity.ok("Historia eliminada con éxito, id:"+id);
  }
}
