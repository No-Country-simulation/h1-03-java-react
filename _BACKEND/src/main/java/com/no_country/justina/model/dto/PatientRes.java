package com.no_country.justina.model.dto;

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
        private long idPatient;
        private String docIdentity;
        private String phone;
        private String address;
        private LocalDate birthdate;
        private int maritalStatus;
        private int genre;
        private UserRes user;
}
