package com.no_country.justina.config;

import com.no_country.justina.model.converters.*;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class AppConfig {
    private final ConvertDoctorReq converterDoctorReq;
    private final ConvertDoctorRes converterDoctorRes;
    private final ConverterShiftReq converterShiftReq;
//    private final ConverterShiftRes converterShiftRes;
    private final ConvertAppointmentReq convertAppointmentReq;
    private final ConvertAppointmentRes convertAppointmentRes;
    private final ConvertPatientReq convertPatientReq;
    private final ConvertUserRes convertUserRes;
    private final ConvertDoctorShort convertDoctorShort;

    @Bean
    public ModelMapper modelMapper() {
        var modelMapper = new ModelMapper();
        modelMapper.addConverter(converterDoctorReq);
        modelMapper.addConverter(converterDoctorRes);
        modelMapper.addConverter(converterShiftReq);
//        modelMapper.addConverter(converterShiftRes);
        modelMapper.addConverter(convertAppointmentReq);
        modelMapper.addConverter(convertAppointmentRes);
        modelMapper.addConverter(convertPatientReq);
        modelMapper.addConverter(convertUserRes);
        modelMapper.addConverter(convertDoctorShort);
        return modelMapper;
    }
}
