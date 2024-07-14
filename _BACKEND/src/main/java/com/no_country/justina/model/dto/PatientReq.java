package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.Genre;
import com.no_country.justina.model.enums.MaritalStatus;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record PatientReq(
       @NotBlank String docIdentity,
       @NotBlank String phone,
       @NotBlank String address,
       @NotNull LocalDate birthdate,
       @NotNull MaritalStatus maritalStatus,
       @NotNull Genre genre
) {
}
