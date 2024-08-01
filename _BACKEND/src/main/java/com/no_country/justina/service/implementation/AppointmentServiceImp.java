package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.AppointmentException;
import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.entities.Shift;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.model.enums.AppointmentStatus;
import com.no_country.justina.repository.AppointmentRepository;
import com.no_country.justina.service.interfaces.IAppointmentService;
import com.no_country.justina.service.interfaces.IPatientService;
import com.no_country.justina.service.interfaces.IShiftService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImp implements IAppointmentService {
  private final AppointmentRepository appointmentRepo;
  private final IShiftService shiftService;
  private final IPatientService patientService;

  @Override
  public Appointment create(Appointment appointment) {
    var userAuth = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    var patientTarget = patientService.getByUserId(userAuth.getId());
    var shiftTarget = shiftService.getById(appointment.getShift().getId());

    appointment.setDate(shiftTarget.getStartDate());
    appointment.setShift(shiftTarget);
    appointment.setPatient(patientTarget);
    this.verifyAppointmentIsAfterToday(appointment);
    this.verifyOneAppointmentByDayAndPatient(appointment);
    this.verifyAppointmentsAvailable(appointment);
    var savedAppointment = this.appointmentRepo.save(appointment);
    shiftService.updateAppointmentAvailable(appointment.getShift().getId(), 1);
    return savedAppointment;
  }

  @Override
  public Appointment getById(Long id) {
    return this.appointmentRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Cita no encontrada, id: " + id));
  }

  @Override
  public Page<Appointment> getAll(Pageable pageable) {
    return this.appointmentRepo.findAll(pageable);
  }

  @Override
  public Page<Appointment> getAllByDoctorOrSpecialty(Pageable pageable,
                                                     Long doctorId,
                                                     Long specialtyId,
                                                     Long patientId,
                                                     Integer status,
                                                     LocalDateTime start,
                                                     LocalDateTime end) {
    AppointmentStatus statusFormat = null;
    if (start != null && end != null) {
      if (start.isAfter(end)) {
        throw new IllegalArgumentException("La fecha de inicio debe ser anterior a la fecha de término.");
      }
      if (start.getYear() != end.getYear()) {
        throw new IllegalArgumentException("Los rangos de horario deben ser del mismo año.");
      }
    }
    if (status != null) {
      statusFormat = AppointmentStatus.fromId(status);
    }
    return this.appointmentRepo.findAllByDoctorOrSpecialty(
            pageable, doctorId, specialtyId, patientId, statusFormat, start, end);
  }

  @Override
  public Page<Appointment> getAllByFiltersForAuthUser(Pageable pageable,
                                                      Long doctorId,
                                                      Long specialty,
                                                      Integer status,
                                                      LocalDateTime start,
                                                      LocalDateTime end) {
    UserEntity user = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    Patient patientAuth = this.patientService.getByUserId(user.getId());
    return this.getAllByDoctorOrSpecialty(pageable, doctorId, specialty, patientAuth.getIdPatient(), status, start, end);
  }

  @Override
  public Appointment update(Appointment appointment) {
    this.verifyAppointmentExist(appointment.getId());
    return this.appointmentRepo.save(appointment);
  }

  @Transactional
  @Override
  public Appointment reschedule(Appointment appointment) {
    var oldAppointment = this.getById(appointment.getId());
    this.verifyOnlyAuthUserModifyHisOwnAppointment(oldAppointment);
    this.verifyAppointmentIsPending(oldAppointment);
    int updateResult = this.appointmentRepo.updateAppointmentStatus(
            AppointmentStatus.RESCHEDULE, appointment.getId());
    this.verifyOnlyOneAppointmentIsAffected(updateResult);
    this.shiftService.updateAppointmentAvailable(oldAppointment.getShift().getId(), -1);
    appointment.setId(null);
    return this.create(appointment);
  }

  @Transactional
  @Override
  public Appointment cancelAppointment(Long id) {
    var oldAppointment = this.getById(id);
    this.verifyOnlyAuthUserModifyHisOwnAppointment(oldAppointment);
    this.verifyAppointmentIsPending(oldAppointment);
    int updateResult = this.appointmentRepo.updateAppointmentStatus(
            AppointmentStatus.CANCELLED, id);
    this.verifyOnlyOneAppointmentIsAffected(updateResult);
    this.shiftService.updateAppointmentAvailable(oldAppointment.getShift().getId(), -1);
    oldAppointment.setAppointmentStatus(AppointmentStatus.CANCELLED);
    return oldAppointment;
  }

  @Transactional
  @Override
  public Appointment missingAppointment(Appointment appointment) {
    this.verifyAppointmentIsPending(appointment);
    int updateResult = this.appointmentRepo.updateAppointmentStatus(
            AppointmentStatus.MISSING, appointment.getId());
    this.verifyOnlyOneAppointmentIsAffected(updateResult);
    appointment.setAppointmentStatus(AppointmentStatus.CANCELLED);
    return appointment;
  }

  @Transactional
  @Override
  public Appointment updateToSuccessAppointment(Long id) {
    Appointment currentAppointment = this.getById(id);
    this.verifyAppointmentIsPending(currentAppointment);
    int response = this.appointmentRepo.updateAppointmentStatus(AppointmentStatus.SUCCESS, id);
    this.verifyOnlyOneAppointmentIsAffected(response);
    currentAppointment.setAppointmentStatus(AppointmentStatus.SUCCESS);
    return currentAppointment;
  }


  @Override
  public void deleteById(Long id) {
    this.verifyAppointmentExist(id);
    this.appointmentRepo.deleteById(id);
  }

  @Override
  public List<Appointment> getByShift(long id) {
    return this.appointmentRepo.findByShift_Id(id);
  }

  private void verifyAppointmentExist(long id) {
    boolean exist = this.appointmentRepo.existsById(id);
    if (!exist) throw new EntityNotFoundException("Cita no encontrado, id: " + id);
  }

  private void verifyAppointmentIsAfterToday(Appointment appointment) {
    var appointmentDate = appointment.getDate().toLocalDate();
    if (!appointmentDate.isAfter(LocalDate.now())) {
      throw new IllegalArgumentException("No se pueden crear citas hacia el pasado, ni para el mismo día.");
    }
  }

  private void verifyOneAppointmentByDayAndPatient(Appointment appointment) {
    var appointmentByDay = this.appointmentRepo.getAllByDayAndPatient(
            appointment.getPatient().getIdPatient(),
            appointment.getDate().toLocalDate());
    if (!(appointmentByDay.isEmpty())) {
      throw new IllegalArgumentException("Solo una cita por día. fecha: " + appointment.getDate());
    }
  }

  private void verifyAppointmentsAvailable(Appointment appointment) {
    Shift shift = appointment.getShift();
    if (shift.getAppointment() <= 0) {
      throw new IllegalArgumentException("No hay citas disponibles para este turno. Turno id: " + shift.getId());
    }
  }

  private void verifyAppointmentIsPending(Appointment appointment) {
    if (appointment.getAppointmentStatus() != AppointmentStatus.PENDING) {
      throw new IllegalArgumentException("Solo puedes actualizar citas pendientes. Estado actual: "
              + appointment.getAppointmentStatus());
    }
  }

  private void verifyOnlyAuthUserModifyHisOwnAppointment(Appointment appointment) {
    UserEntity currentUser = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    if (!(appointment.getPatient().getUser().getId().equals(currentUser.getId()))) {
      throw new IllegalArgumentException("Solo puedes cancelar tus citas");
    }
  }

  private void verifyOnlyOneAppointmentIsAffected(int response) {
    if (response != 1) {
      throw new AppointmentException("Solo un registro debe ser afectado por la actualización. Registro afectado: " + response);
    }
  }
}
