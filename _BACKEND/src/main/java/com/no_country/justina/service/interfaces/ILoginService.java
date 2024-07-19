package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.dto.LoginReq;
import com.no_country.justina.model.dto.LoginRes;

public interface ILoginService {
    LoginRes authenticate(LoginReq loginReq);
}
