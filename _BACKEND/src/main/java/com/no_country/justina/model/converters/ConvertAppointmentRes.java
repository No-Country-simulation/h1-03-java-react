package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.AppointmentRes;
import com.no_country.justina.model.entities.Appointment;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
public class ConvertAppointmentRes extends AbstractConverter<Appointment, AppointmentRes> {
  @Override
  protected AppointmentRes convert(Appointment appointment) {
    var appointmentRes = new AppointmentRes();
    String patient = String.format("%s %s",
            appointment.getPatient().getUser().getName(),
            appointment.getPatient().getUser().getLastname());
    String doctor = String.format("%s %s",
            appointment.getShift().getDoctor().getUserEntity().getName(),
            appointment.getShift().getDoctor().getUserEntity().getLastname());
    appointmentRes.setAppointmentId(appointment.getIdAppointment());
    appointmentRes.setDate(appointment.getDate());
    appointmentRes.setPatient(patient);
    appointmentRes.setDoctor(doctor);
    appointmentRes.setSpecialty(appointment.getShift().getSpecialty().getName());
    appointmentRes.setAppointmentStatus(appointment.getAppointmentStatus());
    return appointmentRes;
  }
}
