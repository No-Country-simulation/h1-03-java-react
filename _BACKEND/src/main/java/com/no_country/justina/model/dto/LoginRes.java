package com.no_country.justina.model.dto;

import lombok.*;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginRes {
    private String token;
    private Set<RoleRes> roles;
}
