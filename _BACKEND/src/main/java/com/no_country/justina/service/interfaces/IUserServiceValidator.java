package com.no_country.justina.service.interfaces;

public interface IUserServiceValidator {
    void validatePasswordAndUserEmail(String password, String repeatedPassword, String email);
}
