package com.no_country.justina.controller;

import com.no_country.justina.model.dto.IndicationReq;
import com.no_country.justina.model.dto.IndicationRes;
import com.no_country.justina.model.entities.Indication;
import com.no_country.justina.service.interfaces.IIndicationService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/indication")
@RequiredArgsConstructor
public class IndicationController {
  private final IIndicationService indicationService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody IndicationReq indicationReq) {
    Indication newIndication = mapper.map(indicationReq, Indication.class);
    Indication savedIndication = this.indicationService.create(newIndication);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(mapper.map(savedIndication, IndicationRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var indicationFound = mapper.map(this.indicationService.getById(id), IndicationRes.class);
    return ResponseEntity.ok(indicationFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction) {
    Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(direction), sort));
    return ResponseEntity.ok(this.indicationService.getAll(pageable));
  }
  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody IndicationReq indicationReq,
                                      @PathVariable long id){
    var newIndication = mapper.map(indicationReq, Indication.class);
    newIndication.setIdIndication(id);
    var indicationUpdated = this.indicationService.update(newIndication);
    return ResponseEntity.ok(mapper.map(indicationUpdated, IndicationRes.class));
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id){
    this.indicationService.deleteById(id);
    return ResponseEntity.ok("Indicación eliminada con éxito, id:"+id);
  }
}
