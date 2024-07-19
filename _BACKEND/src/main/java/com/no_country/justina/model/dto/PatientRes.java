package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.Genre;
import com.no_country.justina.model.enums.MaritalStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PatientRes{
        private long id;
        private String docIdentity;
        private String phone;
        private String address;
        private LocalDate birthdate;
        private MaritalStatus maritalStatus;
        private Genre genre;
        private long medicalHistory;
        private UserRes user;
}
