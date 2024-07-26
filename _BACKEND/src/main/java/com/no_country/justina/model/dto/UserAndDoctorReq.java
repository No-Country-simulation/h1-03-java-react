package com.no_country.justina.model.dto;

import com.no_country.justina.model.entities.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserAndDoctorReq {
    private UserReq user;
    private DoctorReq doctor;
}
