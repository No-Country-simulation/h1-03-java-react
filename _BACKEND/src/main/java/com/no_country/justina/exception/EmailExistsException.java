package com.no_country.justina.exception;

public class EmailExistsException extends RuntimeException {
    public EmailExistsException() {
        super("Email ya registrado. Ingrese nuevo email");
    }
}
