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
          summary = "Crea un turno.",
          description = "Crea un turno para un determinado paciente y turno medico específico, no pasar el parámetro id.  Disponible solo para el rol PATIENT"
  )
  @PostMapping
  public ResponseEntity<?> create(@RequestBody @Valid AppointmentReq appointmentReq) {
    Appointment newAppointment = mapper.map(appointmentReq, Appointment.class);
    Appointment savedAppointment = this.appointmentService.create(newAppointment);
    return ResponseEntity
            .status(HttpStatus.CREATED).body(mapper.map(savedAppointment, AppointmentRes.class));
  }

  @Operation(summary = "Trae un turno por su id.", description = " Disponible solo para el rol DOCTOR")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable long id) {
    var appointmentFound = mapper.map(this.appointmentService.getById(id), AppointmentRes.class);
    return ResponseEntity.ok(appointmentFound);
  }
  @Operation(summary = "Trae todos los turnos por id del turno medico.", description = " Disponible solo para el rol DOCTOR")
  @GetMapping("/shifts/{id}")
  public ResponseEntity<?> getAllByShiftId(@PathVariable long id){
    List<Appointment> appointments= this.appointmentService.getByShift(id);
    List<AppointmentRes> appointmentsRes = appointments.stream()
            .map(item->mapper.map(item, AppointmentRes.class))
            .toList();
    return ResponseEntity.ok(appointmentsRes);
  }

  @Operation(summary = "Traer todos los turnos en formato pagina.", description = " Disponible solo para el rol DOCTOR")
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
  @Operation(summary = "Trae todos los turnos con determinados filtros.",
  description = "Obtiene las turnos en un determinado intervalo de fechas y aplicándole filtros por id de doctor, id de especialidad, o estado de turno. Solo disponible para el rol DOCTOR")
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

  @Operation(summary = "Trae todos los turnos usando filtros para el usuario autenticado.",
          description = "Obtiene los turnos en un determinado intervalo de fechas y aplicándole filtros por id de doctor, id de especialidad, o estado de turno. Solo disponible para el rol PATIENT")
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

  @Operation(summary = "Trae el turno mas próximo a la fecha actual",
          description = "Solo disponible para el rol PATIENT")
  @GetMapping("/current-user/close")
  public ResponseEntity<?> getLastByCurrentUser(){
    Appointment nextAppointment = this.appointmentService.getCloseByCurrentUser();
    return ResponseEntity.ok(mapper.map(nextAppointment, AppointmentRes.class));
  }

//  @Operation(summary = "Actualiza una turno",
//  description = "Actualiza la turno, aquí es necesario pasar el id en el json.")
//  @PutMapping
//  public ResponseEntity<?> updateById(@RequestBody AppointmentReq appointmentReq) {
//    var newAppointment = mapper.map(appointmentReq, Appointment.class);
//    var appointmentUpdated = this.appointmentService.update(newAppointment);
//    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
//  }
  @Operation(summary = "Reprograma un turno.",
  description = "Reprograma un turno, el id es del turno a reprogramar, los demás datos del nuevo turno. Disponible solo para el rol PATIENT")
  @PutMapping("/reschedule")
  public ResponseEntity<?> rescheduleById(@RequestBody @Valid AppointmentReq appointmentReq) {
    var newAppointment = mapper.map(appointmentReq, Appointment.class);
    var appointmentUpdated = this.appointmentService.reschedule(newAppointment);
    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
  }
  @Operation(summary = "Cancela un turno por id.", description = " Disponible solo para el rol PATIENT")
  @PutMapping("/cancel/{id}")
  public ResponseEntity<?> cancelById(@PathVariable long id) {
    var appointmentUpdated = this.appointmentService.cancelAppointment(id);
    return ResponseEntity.ok(mapper.map(appointmentUpdated, AppointmentRes.class));
  }

//  @Operation(summary = "borra un turno por id de la base de datos.")
//  @DeleteMapping("/{id}")
//  public ResponseEntity<?> deleteById(@PathVariable long id) {
//    this.appointmentService.deleteById(id);
//    return ResponseEntity.ok("Cita eliminada con éxito, id:" + id);
//  }
}
