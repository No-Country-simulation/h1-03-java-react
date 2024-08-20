package com.no_country.justina.controller;

import com.no_country.justina.model.dto.TokenAuthRes;
import com.no_country.justina.service.interfaces.IAuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${api.base-url}")
@RequiredArgsConstructor
public class AuthenticationController {
    private final IAuthenticationService authenticationService;

    @GetMapping("/token/authenticate")
    public ResponseEntity<TokenAuthRes> tokenAuthenticate() {
        return new ResponseEntity<>(authenticationService.authenticate(), HttpStatus.OK);
    }
}
