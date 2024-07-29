package com.no_country.justina.controller;

import com.no_country.justina.model.dto.DrugRouteReq;
import com.no_country.justina.model.dto.DrugRouteRes;
import com.no_country.justina.model.entities.DrugRoute;
import com.no_country.justina.service.interfaces.IDrugRouteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/drug-route")
@RequiredArgsConstructor
public class DrugRouteController {
  private final IDrugRouteService routeService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid DrugRouteReq drugFormReq) {
    DrugRoute newDrugRoute = mapper.map(drugFormReq, DrugRoute.class);
    DrugRoute savedDrugRoute = this.routeService.create(newDrugRoute);
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(mapper.map(savedDrugRoute, DrugRouteRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var adminFound = mapper.map(this.routeService.getById(id), DrugRoute.class);
    return ResponseEntity.ok(adminFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<DrugRoute> result = this.routeService.getAll(pageable);
    Page<DrugRouteRes> resultDto = result.map(item -> mapper.map(item, DrugRouteRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PutMapping
  public ResponseEntity<?> updateById(@RequestBody DrugRouteReq drugFormReq) {
    var newDrugRoute = mapper.map(drugFormReq, DrugRoute.class);
    var updated = this.routeService.update(newDrugRoute);
    return ResponseEntity.ok(mapper.map(updated, DrugRouteRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.routeService.deleteById(id);
    return ResponseEntity.ok("DrugRoute eliminado con éxito, id:" + id);
  }
}
