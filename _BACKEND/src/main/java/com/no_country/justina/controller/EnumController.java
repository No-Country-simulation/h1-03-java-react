package com.no_country.justina.controller;

import com.no_country.justina.service.interfaces.IEnumService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${api.base-url}/enum")
@RequiredArgsConstructor
public class EnumController {
  private  final IEnumService enumService;

  @Operation(summary = "Retorna la clave-valor de los enums usados.")
  @GetMapping("/{name}")
  public ResponseEntity<?> getEnum (@PathVariable String name){
    try {
      Class<Enum> enumClass = (Class<Enum>) Class.forName("com.no_country.justina.model.enums."+name);
      return ResponseEntity.ok(enumService.getEnum(enumClass));
    } catch (ClassNotFoundException err) {
      throw new IllegalArgumentException("Enum type not found");
    }
  }
}
