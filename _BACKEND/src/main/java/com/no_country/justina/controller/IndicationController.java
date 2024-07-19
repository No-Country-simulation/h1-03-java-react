package com.no_country.justina.controller;

import com.no_country.justina.model.dto.IndicationReq;
import com.no_country.justina.model.dto.IndicationRes;
import com.no_country.justina.model.entities.Indication;
import com.no_country.justina.service.interfaces.IIndicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/indication")
@RequiredArgsConstructor
@Slf4j
public class IndicationController {
  private final IIndicationService indicationService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid IndicationReq indicationReq) {
    Indication newIndication = mapper.map(indicationReq, Indication.class);
    Indication savedIndication = this.indicationService.create(newIndication);
    log.info(savedIndication.toString());
    return ResponseEntity
            .status(HttpStatus.CREATED).body("hola");
//            .body(mapper.map(savedIndication, IndicationRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var indicationFound = mapper.map(this.indicationService.getById(id), IndicationRes.class);
    return ResponseEntity.ok(indicationFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "idIndication") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Indication> result = this.indicationService.getAll(pageable);
    Page<IndicationRes> resultDto = result.map(item -> mapper.map(item, IndicationRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody IndicationReq indicationReq,
                                      @PathVariable long id) {
    var newIndication = mapper.map(indicationReq, Indication.class);
    newIndication.setIdIndication(id);
    var indicationUpdated = this.indicationService.update(newIndication);
    return ResponseEntity.ok(mapper.map(indicationUpdated, IndicationRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.indicationService.deleteById(id);
    return ResponseEntity.ok("Indicación eliminada con éxito, id:" + id);
  }

}
