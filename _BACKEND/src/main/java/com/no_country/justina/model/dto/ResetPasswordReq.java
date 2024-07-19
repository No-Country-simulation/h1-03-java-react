package com.no_country.justina.model.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResetPasswordReq {

    @NotNull(message = "No puede estar vacio")
    @Size(min = 8, message = "Debe contener un mínimo de 8 caracteres")
    private String password;
    private String token;

}
