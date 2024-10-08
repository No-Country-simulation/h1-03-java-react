package com.no_country.justina.controller;

import com.no_country.justina.model.dto.DrugFormRes;
import com.no_country.justina.model.entities.DrugForm;
import com.no_country.justina.service.interfaces.IDrugFormService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/drug-form")
@RequiredArgsConstructor
@Tag(name = "Presentación del medicamento")
@SecurityRequirement(name = "bearer-key")
public class DrugFormController {
  private final IDrugFormService formService;
  private final ModelMapper mapper;

//  @PostMapping
//  public ResponseEntity<?> create(@RequestBody @Valid DrugFormReq drugFormReq) {
//    DrugForm newDrugForm = mapper.map(drugFormReq, DrugForm.class);
//    DrugForm savedDrugForm = this.formService.create(newDrugForm);
//    return ResponseEntity
//            .status(HttpStatus.CREATED)
//            .body(mapper.map(savedDrugForm, DrugFormRes.class));
//  }
  @Operation(summary = "Trae un forma por su id.", description = "Disponible solo para el rol DOCTOR")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var adminFound = mapper.map(this.formService.getById(id), DrugForm.class);
    return ResponseEntity.ok(adminFound);
  }

  @Operation(summary = "Trae todas las formas.", description = "Disponible solo para el rol DOCTOR")
  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<DrugForm> result = this.formService.getAll(pageable);
    Page<DrugFormRes> resultDto = result.map(item -> mapper.map(item, DrugFormRes.class));
    return ResponseEntity.ok(resultDto);
  }

//  @PutMapping
//  public ResponseEntity<?> updateById(@RequestBody DrugFormReq drugFormReq) {
//    var newDrugForm = mapper.map(drugFormReq, DrugForm.class);
//    var updated = this.formService.update(newDrugForm);
//    return ResponseEntity.ok(mapper.map(updated, DrugFormRes.class));
//  }
//
//  @DeleteMapping("/{id}")
//  public ResponseEntity<?> deleteById(@PathVariable long id) {
//    this.formService.deleteById(id);
//    return ResponseEntity.ok("DrugForm eliminado con éxito, id:" + id);
//  }
}
