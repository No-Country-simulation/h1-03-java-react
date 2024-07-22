package com.no_country.justina.controller;

import com.no_country.justina.model.dto.AdminReq;
import com.no_country.justina.model.dto.AdminRes;
import com.no_country.justina.model.entities.Admin;
import com.no_country.justina.service.interfaces.IAdminService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${api.base-url}/admins")
@RequiredArgsConstructor
public class AdminController {
  private final IAdminService adminService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid AdminReq treatmentReq) {
    Admin newAdmin = mapper.map(treatmentReq, Admin.class);
    Admin savedAdmin = this.adminService.create(newAdmin);
    return ResponseEntity
            .status(HttpStatus.CREATED).body("hola");
//            .body(mapper.map(savedIndication, AdminRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var adminFound = mapper.map(this.adminService.getById(id), Admin.class);
    return ResponseEntity.ok(adminFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "idAdmin") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Admin> result = this.adminService.getAll(pageable);
    Page<AdminRes> resultDto = result.map(item -> mapper.map(result, AdminRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody AdminReq treatmentReq,
                                      @PathVariable long id) {
    var newAdmin = mapper.map(treatmentReq, Admin.class);
    newAdmin.setId(id);
    var adminUpdated = this.adminService.update(newAdmin);
    return ResponseEntity.ok(mapper.map(adminUpdated, AdminRes.class));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.adminService.deleteById(id);
    return ResponseEntity.ok("Administrador eliminado con éxito, id:" + id);
  }
}
