package com.no_country.justina.exception;

public class UserIdNotFoundException extends RuntimeException {
    public UserIdNotFoundException(Long id) {
        super("El usuario con id: " + id + " no se encuentra registrado");
    }
}
