package com.no_country.justina.controller;

import com.no_country.justina.model.dto.*;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.service.interfaces.IUserAndPatientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base-url}/users-patients")
@Tag(name = "Usuario Paciente", description = "Disponible solo para el rol PATIENT ")
@SecurityRequirement(name = "bearer-key")
public class UserAndPatientController {
    private final IUserAndPatientService userAndPatientService;
    private final ModelMapper modelMapper;


    @Operation(
            summary = "Actualiza el usuario y el paciente",
            description = "Actualiza el usuario y el paciente, con los datos pasado por el cuerpo de la solicitud, " +
                    "si el id no se encuentra en base de datos, devuelve una excepcion de entidad no encontrada," +
                    "sino devuelve los datos de usuario que fueron actualizados"
    )
    @PutMapping()
    public ResponseEntity<UserAndPatientRes> update(@RequestBody @Valid UserAndPatientReq userAndPatientReq) {
        var user = userAndPatientService.update(
                modelMapper.map(userAndPatientReq.getUser(), UserEntity.class),
                modelMapper.map(userAndPatientReq.getPatient(), Patient.class));

        return new ResponseEntity<>(modelMapper.map(user, UserAndPatientRes.class), HttpStatus.OK);
    }

    @Operation(summary = "Trae al paciente autenticado")
    @GetMapping()
    public ResponseEntity<UserAndPatientRes> getUserAndDoctor() {
        return new ResponseEntity<>(userAndPatientService.get(), HttpStatus.OK);
    }
}
