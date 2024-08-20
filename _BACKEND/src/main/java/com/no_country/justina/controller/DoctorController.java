package com.no_country.justina.controller;

import com.no_country.justina.model.dto.DoctorReq;
import com.no_country.justina.model.dto.DoctorRes;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.service.interfaces.IDoctorService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        var doctors = doctorService.getAllDoctors(pageable)
                .map(item->modelMapper.map(item, DoctorRes.class));
        return new ResponseEntity<>(doctors, HttpStatus.OK);
    }
    @Operation(summary = "Crea un doctor.", description = "Disponible solo para el rol DOCTOR",
    security = @SecurityRequirement(name = "bearer-key"))
    @PostMapping()
    public ResponseEntity<DoctorRes> create(@RequestBody DoctorReq doctorReq) {
        Doctor doctor = doctorService.create(modelMapper.map(doctorReq, Doctor.class));
        return new ResponseEntity<>(modelMapper.map(doctor, DoctorRes.class), HttpStatus.CREATED);
    }

    @Operation(summary = "Trae todos lo doctores por especialidad",
            description = "Usa el id de la especialidad para la búsqueda.")
    @GetMapping("/specialty/{id}")
    public ResponseEntity<?> getAllBySpecialty(@PathVariable Long id){
        List<DoctorRes> doctorResFound = this.doctorService.getAllBySpecialty(id)
                .stream()
                .map(item->modelMapper.map(item, DoctorRes.class))
                .toList();
        return ResponseEntity.ok(doctorResFound);
    }

    @Operation(summary = "Actualiza un doctor", description = "Disponible solo para el rol DOCTOR",
    security = @SecurityRequirement(name = "bearer-key"))
    @PutMapping()
    public ResponseEntity<DoctorRes> update(@RequestBody @Valid DoctorReq doctorReq) {
        var doctor = doctorService.update(modelMapper.map(doctorReq, Doctor.class));
        return new ResponseEntity<>(modelMapper.map(doctor, DoctorRes.class), HttpStatus.OK);
    }
}
