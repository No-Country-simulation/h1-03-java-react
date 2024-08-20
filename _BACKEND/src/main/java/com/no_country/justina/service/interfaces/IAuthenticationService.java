package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.dto.TokenAuthRes;

public interface IAuthenticationService {
    TokenAuthRes authenticate();
}
