package com.no_country.justina.controller;

import com.no_country.justina.model.dto.IndicationReq;
import com.no_country.justina.model.dto.IndicationRes;
import com.no_country.justina.model.entities.Indication;
import com.no_country.justina.service.interfaces.IIndicationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.EntityManager;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("${api.base-url}/indications")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Indicación Farmacológica")
@SecurityRequirement(name = "bearer-key")
public class IndicationController {
  private final IIndicationService indicationService;
  private final ModelMapper mapper;
  private final EntityManager entityManager;

  @Operation(summary = "Crea una indicación", description = "Disponible solo para DOCTOR")
  @PostMapping
  @Transactional
  public ResponseEntity<?> create(@RequestBody @Valid IndicationReq indicationReq) {
    Indication newIndication = mapper.map(indicationReq, Indication.class);
    Indication savedIndication = this.indicationService.create(newIndication);
    entityManager.clear();
    IndicationRes indicationDto = mapper.map(
            this.indicationService.getById(savedIndication.getId()), IndicationRes.class);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(indicationDto);
  }

  @Operation(summary = "Puedes crear un conjunto de indicaciones.",
  description = "Permite crear multiples indicaciones, verificando que la fecha de inicio sea posterior a la actual" +
          "y todas estén asociadas a la misma receta. Disponible solo para DOCTOR")
  @PostMapping("/group")
  public ResponseEntity<?> createAll(@RequestBody @Valid Set<@Valid IndicationReq> indicationsReq) {
    Set<Indication> indications = indicationsReq.stream()
            .map(item->mapper.map(item, Indication.class))
            .collect(Collectors.toSet());
    Set<Indication> savedIndications = this.indicationService.createAll(indications);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(
                    savedIndications.stream()
                            .map(item->mapper.map(item, IndicationRes.class))
                            .collect(Collectors.toSet()));
  }

  @Operation(summary = "Trae una indicación por su id.", description = "Disponible solo para DOCTOR")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var indicationFound = mapper.map(this.indicationService.getById(id), IndicationRes.class);
    return ResponseEntity.ok(indicationFound);
  }

  @Operation(summary = "Trae todas las indicaciones paginadas.",
          description = "Disponible solo para DOCTOR")
  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Indication> result = this.indicationService.getAll(pageable);
    Page<IndicationRes> resultDto = result.map(item -> mapper.map(item, IndicationRes.class));
    return ResponseEntity.ok(resultDto);
  }
  @Operation(summary = "Trae todas las indicaciones por receta")
  @GetMapping("prescription/{id}")
  public ResponseEntity<?> getAllByPrescription(@PathVariable Long id) {
    List<Indication> result = this.indicationService.getByPrescription(id);
    List<IndicationRes> resultDto = result.stream()
            .map(item->mapper.map(item, IndicationRes.class))
            .toList();
    return ResponseEntity.ok(resultDto);
  }

//  @PutMapping
//  public ResponseEntity<?> updateById(@RequestBody @Valid IndicationReq indicationReq) {
//    var newIndication = mapper.map(indicationReq, Indication.class);
//    var indicationUpdated = this.indicationService.update(newIndication);
//    return ResponseEntity.ok(mapper.map(indicationUpdated, IndicationRes.class));
//  }
//
//  @DeleteMapping("/{id}")
//  public ResponseEntity<?> deleteById(@PathVariable long id) {
//    this.indicationService.deleteById(id);
//    return ResponseEntity.ok("Indicación eliminada con éxito, id:" + id);
//  }

}
