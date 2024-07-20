package com.no_country.justina.model.dto;


import com.no_country.justina.model.enums.DrugForm;
import com.no_country.justina.model.enums.DrugRoute;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Setter
@Getter
@NoArgsConstructor
public class IndicationReq{
        private Long id;
        @NotNull @Min(0) private Integer dosage;
        @NotNull @Min(0) private Integer quantity;
        @NotBlank private DrugForm form;
        @NotBlank private DrugRoute routeAdministration;
        @NotNull @Min(0) private Integer frequency;
        @NotNull @Min(0) private Integer duration;
        @NotNull private LocalDate startDate;
        private String description;
        @NotNull private DrugReq drug;
        @NotNull private PrescriptionReq prescription;
}
