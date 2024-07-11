package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.Genre;
import com.no_country.justina.model.enums.MaritalStatus;

import java.time.LocalDate;

public record PatientRes(
        long id,
        String docIdentity,
        String phone,
        String address,
        LocalDate birthdate,
        MaritalStatus maritalStatus,
        Genre genre
) {
}
