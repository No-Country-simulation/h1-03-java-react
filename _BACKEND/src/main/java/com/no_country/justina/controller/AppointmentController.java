package com.no_country.justina.controller;

import com.no_country.justina.model.dto.AppointmentReq;
import com.no_country.justina.model.dto.AppointmentRes;
import com.no_country.justina.model.dto.DateRange;
import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.service.interfaces.IAppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("${api.base-url}/appointment")
@RequiredArgsConstructor
public class AppointmentController {
  private final IAppointmentService appointmentService;
  private final ModelMapper mapper;

  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid AppointmentReq appointmentReq) {
    Appointment newAppointment = mapper.map(appointmentReq, Appointment.class);
    Appointment savedAppointment = this.appointmentService.create(newAppointment);
    return ResponseEntity
            .status(HttpStatus.CREATED).body(mapper.map(savedAppointment, AppointmentRes.class));
  }

  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var appointmentFound = mapper.map(this.appointmentService.getById(id), Appointment.class);
    return ResponseEntity.ok(appointmentFound);
  }

  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "idAppointment") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Appointment> result = this.appointmentService.getAll(pageable);
    Page<AppointmentRes> resultDto = result.map(item -> mapper.map(item, AppointmentRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PostMapping("/filter")
  public ResponseEntity<?> getAllDoctorOrSpecialty(
          @RequestParam(defaultValue = "0") int page,
          @RequestParam(defaultValue = "20") int size,
          @RequestParam(defaultValue = "idAppointment") String sort,
          @RequestParam(defaultValue = "asc") String direction,
          Pageable pageable,
          @RequestParam(required = false) Long doctorId,
          @RequestParam(required = false) String specialty,
          @RequestBody @Valid DateRange range) {
    Page<Appointment> result = this.appointmentService.getAllByDoctorOrSpecialty(
            pageable, doctorId, specialty, range.getStart(), range.getEnd());
    Page<AppointmentRes> resultDto = result.map(item -> mapper.map(item, AppointmentRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(@RequestBody AppointmentReq appointmentReq,
                                      @PathVariable long id) {
    var newAppointment = mapper.map(appointmentReq, Appointment.class);
    newAppointment.setId(id);
    var appointmentUpdated = this.appointmentService.update(newAppointment);
    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
  }
  @PutMapping("/reschedule/{id}")
  public ResponseEntity<?> rescheduleById(@RequestBody @Valid AppointmentReq appointmentReq,
                                      @PathVariable long id) {
    var newAppointment = mapper.map(appointmentReq, Appointment.class);
    newAppointment.setId(id);
    var appointmentUpdated = this.appointmentService.reschedule(newAppointment);
    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
  }

  @PutMapping("/cancel/{id}")
  public ResponseEntity<?> cancelById(@PathVariable long id) {
    var appointmentUpdated = this.appointmentService.cancel(id);
    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
  }


  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.appointmentService.deleteById(id);
    return ResponseEntity.ok("Cita eliminada con éxito, id:" + id);
  }
}
