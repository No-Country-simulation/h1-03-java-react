package com.no_country.justina.controller;

import com.no_country.justina.model.dto.DoctorReq;
import com.no_country.justina.model.dto.DoctorRes;
import com.no_country.justina.model.entities.Doctor;
import com.no_country.justina.service.interfaces.IDoctorService;
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
public class DoctorController {

    private final IDoctorService doctorService;
    private final ModelMapper modelMapper;

    @GetMapping("/{id}")
    public ResponseEntity<DoctorRes> getUser(@PathVariable Long id) {
        DoctorRes doctorRes = modelMapper.map(doctorService.getDoctor(id), DoctorRes.class);
        return new ResponseEntity<>(doctorRes, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<Page<DoctorRes>> getAllDoctors(Pageable pageable) {
        var doctors = doctorService.getAllDoctors(pageable).stream()
                .map(doctor -> modelMapper.map(doctor, DoctorRes.class)).toList();
        var page= new PageImpl<>(doctors, pageable, doctors.size());
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<DoctorRes> create(@RequestBody DoctorReq doctorReq) {
        System.out.println(modelMapper.map(doctorReq, Doctor.class).getAddress());
        Doctor doctor = doctorService.create(modelMapper.map(doctorReq, Doctor.class));
        return new ResponseEntity<>(modelMapper.map(doctor, DoctorRes.class), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DoctorRes> update(@RequestBody @Valid DoctorReq doctorReq, @PathVariable long id) {
        var newDoctor = modelMapper.map(doctorReq, Doctor.class);
        newDoctor.setId(id);
        var doctor = doctorService.update(newDoctor);
        return new ResponseEntity<>(modelMapper.map(doctor, DoctorRes.class), HttpStatus.OK);
    }
}
