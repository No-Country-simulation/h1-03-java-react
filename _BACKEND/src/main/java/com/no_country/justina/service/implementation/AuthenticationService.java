package com.no_country.justina.service.implementation;

import com.no_country.justina.model.dto.RoleRes;
import com.no_country.justina.model.dto.TokenAuthRes;
import com.no_country.justina.model.entities.Role;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.service.interfaces.IAuthenticationService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements IAuthenticationService {

    private final ModelMapper modelMapper;

    @Override
    public TokenAuthRes authenticate() {
        UserEntity user = (UserEntity) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Set<RoleRes> roles = user.getRoles().stream().map(role -> modelMapper.map(role, RoleRes.class)).collect(Collectors.toSet());
        return new TokenAuthRes(true, roles);
    }
}
