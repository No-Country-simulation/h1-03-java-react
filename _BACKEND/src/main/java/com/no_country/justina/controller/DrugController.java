package com.no_country.justina.controller;

import com.no_country.justina.model.dto.DrugReq;
import com.no_country.justina.model.dto.DrugRes;
import com.no_country.justina.model.entities.Drug;
import com.no_country.justina.service.interfaces.IDrugService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base-url}/drug")
public class DrugController {
  private final IDrugService drugService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody DrugReq drugReq) {
    Drug newDrug = mapper.map(drugReq, Drug.class);
    Drug savedDrug = this.drugService.create(newDrug);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(mapper.map(savedDrug, DrugRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var drugFound = mapper.map(this.drugService.getById(id), DrugRes.class);
    return ResponseEntity.ok(drugFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "idDrug") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Drug> searchResult = this.drugService.getAll(pageable);
    Page<DrugRes> resultDto = searchResult.map(drug -> mapper.map(searchResult, DrugRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody DrugReq drugReq,
                                      @PathVariable long id) {
    var newDrug = mapper.map(drugReq, Drug.class);
    newDrug.setIdDrug(id);
    var drugUpdated = this.drugService.update(newDrug);
    return ResponseEntity.ok(mapper.map(drugUpdated, DrugRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.drugService.deleteById(id);
    return ResponseEntity.ok("Medicamento eliminado con éxito, id:" + id);
  }

  @GetMapping("/search/{name}")
  public ResponseEntity<?> searchByName(@PathVariable String name) {
    Drug result = this.drugService.getByName(name);
    return ResponseEntity.ok(this.mapper.map(result, DrugRes.class));
  }

  @GetMapping("/findByName/{name}")
  public ResponseEntity<?> findLikeName(@PathVariable String name,
                                        @RequestParam(defaultValue = "0") int page,
                                        @RequestParam(defaultValue = "20") int size,
                                        @RequestParam(defaultValue = "idDrug") String sort,
                                        @RequestParam(defaultValue = "asc") String direction,
                                        Pageable pageable
  ) {
    Page<Drug> searchResult = this.drugService.getAllLikeName(pageable, name);
    var resultDto = searchResult.map(drug -> this.mapper.map(drug, DrugRes.class));
    return ResponseEntity.ok(resultDto);
  }
}
