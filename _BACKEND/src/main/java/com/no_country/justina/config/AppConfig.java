package com.no_country.justina.config;

import com.no_country.justina.model.converters.ConvertDoctorReq;
import com.no_country.justina.model.converters.ConverterShiftReq;
import com.no_country.justina.model.converters.ConverterShiftRes;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class AppConfig {
    private final ConvertDoctorReq converterDoctor;
    private final ConverterShiftReq converterShiftReq;
    private final ConverterShiftRes converterShiftRes;

    @Bean
    public ModelMapper modelMapper() {
        var modelMapper = new ModelMapper();
        modelMapper.addConverter(converterDoctor);
        modelMapper.addConverter(converterShiftReq);
        modelMapper.addConverter(converterShiftRes);
        return modelMapper;
    }
}
