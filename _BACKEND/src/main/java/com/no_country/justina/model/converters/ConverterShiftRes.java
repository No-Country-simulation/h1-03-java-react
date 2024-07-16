package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.ShiftRes;
import com.no_country.justina.model.entities.Shift;
import lombok.RequiredArgsConstructor;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ConverterShiftRes extends AbstractConverter<Shift, ShiftRes> {

  @Override
  protected ShiftRes convert(Shift shift) {
    ShiftRes shiftRes = new ShiftRes();
//    String doctorName = String.format("%s %s",
//            shift.getDoctor().getUserEntity().getName(),
//            shift.getDoctor().getUserEntity().getLastname());

    shiftRes.setIdShift(shift.getIdShift());
    shiftRes.setAppointment(shift.getAppointment());
    shiftRes.setStartDate(shift.getStartDate());
    shiftRes.setEndDate(shift.getEndDate());
    shiftRes.setDoctor("Pancho Lombardi");
    shiftRes.setSpecialty(shift.getSpecialty().getName());
    return shiftRes;
  }
}
