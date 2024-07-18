package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.AppointmentReq;
import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.service.interfaces.IPatientService;
import com.no_country.justina.service.interfaces.IShiftService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConvertAppointmentReq extends AbstractConverter<AppointmentReq, Appointment> {
  private final IPatientService patientService;
  private final IShiftService shiftService;

  @Override
  protected Appointment convert(AppointmentReq appointmentReq) {
    var patient = patientService.getById(appointmentReq.getPatientId());
    var shift = shiftService.getById(appointmentReq.getShiftId());
    Appointment appointment = new Appointment();

    appointment.setDate(shift.getStartDate());
    appointment.setShift(shift);
    appointment.setPatient(patient);
    return appointment;
  }
}
