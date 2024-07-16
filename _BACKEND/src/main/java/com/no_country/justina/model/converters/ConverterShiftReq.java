package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.ShiftReq;
import com.no_country.justina.model.entities.Shift;
import com.no_country.justina.service.interfaces.IDoctorService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConverterShiftReq extends AbstractConverter<ShiftReq, Shift> {
  private final IDoctorService doctorService;
  @Override
  protected Shift convert(ShiftReq shiftReq) {
    var currentDoctor = doctorService.getDoctor(shiftReq.getDoctorId());
    Shift shift = new Shift();
    shift.setAppointment(shiftReq.getAppointment());
    shift.setStartDate(shiftReq.getStartDate());
    shift.setEndDate(shiftReq.getEndDate());
    shift.setSpecialty(currentDoctor.getSpecialty());
    shift.setDoctor(currentDoctor);
    return shift;
  }
}
