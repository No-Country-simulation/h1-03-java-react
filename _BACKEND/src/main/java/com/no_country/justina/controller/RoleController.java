package com.no_country.justina.controller;

import com.no_country.justina.model.dto.RoleRes;
import com.no_country.justina.service.interfaces.IRoleService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base-url}/roles")
public class RoleController {
    private final IRoleService roleService;
    private final ModelMapper modelMapper;

    @GetMapping()
    public ResponseEntity<Page<RoleRes>> getAll(Pageable pageable) {
        List<RoleRes> rolesRes = roleService.getAll(pageable).stream()
                .map(role -> modelMapper.map(role, RoleRes.class)).toList();
        return new ResponseEntity<>(new PageImpl<>(rolesRes, pageable, rolesRes.size()), HttpStatus.OK);
    }
}
