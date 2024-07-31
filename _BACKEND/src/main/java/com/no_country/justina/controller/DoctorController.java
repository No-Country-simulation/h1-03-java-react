package com.no_country.justina.controller;

import com.no_country.justina.model.dto.DoctorReq;
import com.no_country.justina.model.dto.DoctorRes;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.service.interfaces.IDoctorService;
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

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base-url}/doctors")
@Tag(name = "Doctor")
public class DoctorController {

    private final IDoctorService doctorService;
    private final ModelMapper modelMapper;
    @Operation(summary = "Trae un doctor por su id.", description = "Usa el id de la ruta.")
    @GetMapping("/{id}")
    public ResponseEntity<DoctorRes> getDoctor(@PathVariable Long id) {
        DoctorRes doctorRes = modelMapper.map(doctorService.getDoctor(id), DoctorRes.class);
        return new ResponseEntity<>(doctorRes, HttpStatus.OK);
    }
    @Operation(summary = "Trae todos los doctores paginados.")
    @GetMapping()
    public ResponseEntity<Page<DoctorRes>> getAllDoctors(Pageable pageable) {
        var doctors = doctorService.getAllDoctors(pageable).stream()
                .map(doctor -> modelMapper.map(doctor, DoctorRes.class)).toList();
        var page= new PageImpl<>(doctors, pageable, doctors.size());
        return new ResponseEntity<>(page, HttpStatus.OK);
    }
    @Operation(summary = "Crea un doctor.", description = "Disponible solo para el rol DOCTOR",
    security = @SecurityRequirement(name = "bearer-key"))
    @PostMapping()
    public ResponseEntity<DoctorRes> create(@RequestBody DoctorReq doctorReq) {
        Doctor doctor = doctorService.create(modelMapper.map(doctorReq, Doctor.class));
        return new ResponseEntity<>(modelMapper.map(doctor, DoctorRes.class), HttpStatus.CREATED);
    }

    @Operation(summary = "Actualiza un doctor", description = "Disponible solo para el rol DOCTOR")
    @PutMapping()
    public ResponseEntity<DoctorRes> update(@RequestBody @Valid DoctorReq doctorReq) {
        var doctor = doctorService.update(modelMapper.map(doctorReq, Doctor.class));
        return new ResponseEntity<>(modelMapper.map(doctor, DoctorRes.class), HttpStatus.OK);
    }
}
