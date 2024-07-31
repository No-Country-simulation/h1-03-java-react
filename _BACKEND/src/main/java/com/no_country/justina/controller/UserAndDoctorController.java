package com.no_country.justina.controller;

import com.no_country.justina.model.dto.*;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.service.interfaces.IUserAndDoctorService;
import com.no_country.justina.service.interfaces.IUserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base-url}/users-doctors")
@Tag(name = "Usuario doctor")
@SecurityRequirement(name = "bearer-key")
public class UserAndDoctorController {
    private final IUserAndDoctorService userAndDoctorService;
    private final ModelMapper modelMapper;


    @Operation(
            summary = "Actualiza el usuario y el doctor",
            description = "Actualiza el usuario y el doctor, con los datos pasado por el cuerpo de la solicitud, " +
                    "si el id no se encuentra en base de datos, devuelve una excepcion de entidad no encontrada," +
                    "sino devuelve los datos de usuario que fueron actualizados"
    )
    @PutMapping()
    public ResponseEntity<UserAndDoctorRes> update(@RequestBody @Valid UserAndDoctorReq userAndDoctorReq) {
        var user = userAndDoctorService.update(modelMapper.map(userAndDoctorReq.getUser(), UserEntity.class),
                modelMapper.map(userAndDoctorReq.getDoctor(), Doctor.class));
        return new ResponseEntity<>(modelMapper.map(user, UserAndDoctorRes.class), HttpStatus.OK);
    }
    @Operation(summary = "Trae al usuario doctor autenticado")
    @GetMapping()
    public ResponseEntity<UserAndDoctorRes> getUserAndDoctor() {
        return new ResponseEntity<>(userAndDoctorService.get(), HttpStatus.OK);
    }
}
