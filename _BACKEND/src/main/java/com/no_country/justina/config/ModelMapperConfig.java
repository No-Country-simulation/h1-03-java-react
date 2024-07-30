package com.no_country.justina.config;

import com.no_country.justina.model.dto.*;
import com.no_country.justina.model.entities.Appointment;
import com.no_country.justina.model.entities.MedicalHistory;
import com.no_country.justina.model.entities.Patient;
import com.no_country.justina.model.enums.AppointmentStatus;
import com.no_country.justina.model.enums.BloodType;
import com.no_country.justina.model.enums.Genre;
import com.no_country.justina.model.enums.MaritalStatus;
import lombok.RequiredArgsConstructor;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class ModelMapperConfig {
  @Bean
  public ModelMapper modelMapper() {
    var modelMapper = new ModelMapper();
    /*Convierte el enum marital status y genre en la entidad patient-----------------*/
    Converter<Integer, MaritalStatus> maritalMap = ctx-> {
      if(ctx.getSource() == null) return null;
      return MaritalStatus.fromId(ctx.getSource());
    };
    Converter<Integer, Genre> genreMap = ctx-> {
      if(ctx.getSource() == null) return null;
      return Genre.fromId(ctx.getSource());
    };
    modelMapper.createTypeMap(PatientReq.class, Patient.class)
            .addMappings(mapper->mapper.using(maritalMap)
                    .map(PatientReq::getMaritalStatus, Patient::setMaritalStatus))
            .addMappings(mapper->mapper.using(genreMap)
                    .map(PatientReq::getGenre, Patient::setGenre));

    Converter<MaritalStatus, Integer> maritalMapInvert = ctx-> {
      if(ctx.getSource() == null) return null;
      return ctx.getSource().getId();
    };
    Converter<Genre, Integer> genreMapInvert = ctx-> {
      if(ctx.getSource() == null) return null;
      return ctx.getSource().getId();
    };
    modelMapper.createTypeMap(Patient.class, PatientRes.class)
            .addMappings(mapper->mapper.using(maritalMapInvert)
                    .map(Patient::getMaritalStatus, PatientRes::setMaritalStatus))
            .addMappings(mapper->mapper.using(genreMapInvert)
                    .map(Patient::getGenre, PatientRes::setGenre));

    /*convertir appointmentStatus en la entidad Appointment*/
    Converter<AppointmentStatus, Integer> appointmentStatusMapInvert = ctx-> {
      if(ctx.getSource() == null) return null;
      return ctx.getSource().getId();
    };
    modelMapper.createTypeMap(Appointment.class, AppointmentRes.class)
            .addMappings(mapper->mapper.using(appointmentStatusMapInvert)
                    .map(Appointment::getAppointmentStatus, AppointmentRes::setAppointmentStatus));

    /*convertir bloodType en Medical History*/
    Converter<Integer, BloodType> bloodMap = ctx-> {
      if(ctx.getSource() == null) return null;
      return BloodType.fromId(ctx.getSource());
    };
    modelMapper.createTypeMap(MedicalHistoryReq.class, MedicalHistory.class)
            .addMappings(mapper->mapper.using(bloodMap)
                    .map(MedicalHistoryReq::getBloodType, MedicalHistory::setBloodType));

    Converter<BloodType, Integer> bloodMapInvert = ctx-> {
      if(ctx.getSource() == null) return null;
      return ctx.getSource().getId();
    };
    modelMapper.createTypeMap(MedicalHistory.class, MedicalHistoryRes.class)
            .addMappings(mapper->mapper.using(bloodMapInvert)
                    .map(MedicalHistory::getBloodType, MedicalHistoryRes::setBloodType));

    /*convertir drug status en Drug*/

    return modelMapper;
  }
}
