package com.no_country.justina.controller;

import com.no_country.justina.model.dto.LoginReq;
import com.no_country.justina.model.dto.LoginRes;
import com.no_country.justina.service.interfaces.ILoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user-login")
@RequiredArgsConstructor
public class LoginController {

    private final ILoginService loginService;

    @PostMapping("/token")
    public ResponseEntity<LoginRes> login(@RequestBody LoginReq loginReq){
        return ResponseEntity.ok(loginService.authenticate(loginReq));
    }
}