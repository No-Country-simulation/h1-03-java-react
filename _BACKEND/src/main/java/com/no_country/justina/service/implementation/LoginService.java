package com.no_country.justina.service.implementation;

import com.no_country.justina.model.dto.LoginReq;
import com.no_country.justina.model.dto.LoginRes;
import com.no_country.justina.model.dto.RoleRes;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.UserRepository;
import com.no_country.justina.service.interfaces.ILoginService;
import com.no_country.justina.util.JWTUtils;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LoginService implements ILoginService {

    private final JWTUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public LoginRes authenticate(LoginReq loginReq) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginReq.getEmail(),
                        loginReq.getPassword()
                )
        );
        UserEntity user = userRepository.findByEmail(loginReq.getEmail())
                .orElseThrow(() -> new EntityNotFoundException("El correo ingresado no es valido " +
                        "o el usuario fue dado de baja"));
        var token = jwtUtils.generateToken(user);
        Set<RoleRes> rolesRes = user.getRoles().stream()
                .map(role -> modelMapper.map(role, RoleRes.class)).collect(Collectors.toSet());
        return new LoginRes(token, rolesRes);
    }
}
