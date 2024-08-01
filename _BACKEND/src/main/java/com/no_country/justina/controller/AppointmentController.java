package com.no_country.justina.controller;

import com.no_country.justina.model.dto.AppointmentReq;
import com.no_country.justina.model.dto.AppointmentRes;
import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.service.interfaces.IAppointmentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("${api.base-url}/appointments")
@RequiredArgsConstructor
@Tag(name = "Turnos")
@SecurityRequirement(name = "bearer-key")
public class AppointmentController {
  private final IAppointmentService appointmentService;
  private final ModelMapper mapper;

  @Operation(
          summary = "Crea una cita.",
          description = "Crea una cita para un determinado paciente y turno medico específico, no pasar el parámetro id."
  )
  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid AppointmentReq appointmentReq) {
    Appointment newAppointment = mapper.map(appointmentReq, Appointment.class);
    Appointment savedAppointment = this.appointmentService.create(newAppointment);
    return ResponseEntity
            .status(HttpStatus.CREATED).body(mapper.map(savedAppointment, AppointmentRes.class));
  }

  @Operation(summary = "Trae una cita por su id")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var appointmentFound = mapper.map(this.appointmentService.getById(id), Appointment.class);
    return ResponseEntity.ok(appointmentFound);
  }
  @Operation(summary = "Trae todas los turnos por id de turno medico.")
  @GetMapping("/shifts/{id}")
  public ResponseEntity<?> getAllByShiftId(@PathVariable long id){
    List<Appointment> appointments= this.appointmentService.getByShift(id);
    List<AppointmentRes> appointmentsRes = appointments.stream()
            .map(item->mapper.map(item, AppointmentRes.class))
            .toList();
    return ResponseEntity.ok(appointmentsRes);
  }

  @Operation(summary = "Traer todas las citas en formato pagina.")
  @GetMapping
  public ResponseEntity<?> getAll(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "20") int size,
                                  @RequestParam(defaultValue = "id") String sort,
                                  @RequestParam(defaultValue = "asc") String direction,
                                  Pageable pageable) {
    Page<Appointment> result = this.appointmentService.getAll(pageable);
    Page<AppointmentRes> resultDto = result.map(item -> mapper.map(item, AppointmentRes.class));
    return ResponseEntity.ok(resultDto);
  }
  @Operation(summary = "Trae todos las citas con determinados filtros.",
  description = "Obtiene las citas en un determinado intervalo de fechas y aplicándole filtros por id de doctor, id de especialidad, o estado de cita. Solo disponible para el rol DOCTOR")
  @GetMapping("/filter")
  public ResponseEntity<?> getAllDoctorOrSpecialty(
          @RequestParam(defaultValue = "0") int page,
          @RequestParam(defaultValue = "20") int size,
          @RequestParam(defaultValue = "id") String sort,
          @RequestParam(defaultValue = "asc") String direction,
          Pageable pageable,
          @RequestParam(required = false) Long doctorId,
          @RequestParam(required = false) Integer status,
          @RequestParam(required = false) Long specialtyId,
          @RequestParam(required = false) Long patientId,
          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
    Page<Appointment> result = this.appointmentService.getAllByDoctorOrSpecialty(
            pageable, doctorId, specialtyId, patientId,status, start, end);
    Page<AppointmentRes> resultDto = result.map(item -> mapper.map(item, AppointmentRes.class));
    return ResponseEntity.ok(resultDto);
  }

  @Operation(summary = "Trae todos las citas usando filtros para el usuario autenticado.",
          description = "Obtiene las citas en un determinado intervalo de fechas y aplicándole filtros por id de doctor, id de especialidad, o estado de cita. Solo disponible para el rol PATIENT")
  @GetMapping("/current-user/filter")
  public ResponseEntity<?> getAllByFilterForCurrentUser(
          @RequestParam(defaultValue = "0") int page,
          @RequestParam(defaultValue = "20") int size,
          @RequestParam(defaultValue = "id") String sort,
          @RequestParam(defaultValue = "asc") String direction,
          Pageable pageable,
          @RequestParam(required = false) Long doctorId,
          @RequestParam(required = false) Integer status,
          @RequestParam(required = false) Long specialtyId,
          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end
          ) {
    Page<Appointment> result = this.appointmentService.getAllByFiltersForAuthUser(
            pageable, doctorId, specialtyId,status, start, end);
    Page<AppointmentRes> resultDto = result.map(item -> mapper.map(item, AppointmentRes.class));
    return ResponseEntity.ok(resultDto);
  }

//  @Operation(summary = "Actualiza una cita",
//  description = "Actualiza la cita, aquí es necesario pasar el id en el json.")
//  @PutMapping
//  public ResponseEntity<?> updateById(@RequestBody AppointmentReq appointmentReq) {
//    var newAppointment = mapper.map(appointmentReq, Appointment.class);
//    var appointmentUpdated = this.appointmentService.update(newAppointment);
//    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
//  }
  @Operation(summary = "Reprograma una cita.",
  description = "Reprograma una cita, el id es de la cita a reprogramar, los demás datos de la nueva cita.")
  @PutMapping("/reschedule")
  public ResponseEntity<?> rescheduleById(@RequestBody @Valid AppointmentReq appointmentReq) {
    var newAppointment = mapper.map(appointmentReq, Appointment.class);
    var appointmentUpdated = this.appointmentService.reschedule(newAppointment);
    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
  }
  @Operation(summary = "Cancela una cita por id.")
  @PutMapping("/cancel/{id}")
  public ResponseEntity<?> cancelById(@PathVariable long id) {
    var appointmentUpdated = this.appointmentService.cancelAppointment(id);
    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
  }

  @Operation(summary = "borra una cita por id de la base de datos.")
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(@PathVariable long id) {
    this.appointmentService.deleteById(id);
    return ResponseEntity.ok("Cita eliminada con éxito, id:" + id);
  }
}
