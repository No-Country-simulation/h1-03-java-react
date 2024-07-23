package com.no_country.justina.controller;

import com.no_country.justina.model.dto.RoleRes;
import com.no_country.justina.model.dto.UserReq;
import com.no_country.justina.model.dto.UserRes;
import com.no_country.justina.model.entities.Role;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.service.implementation.UserServiceImp;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base-url}/users")
public class UserController {
    private final UserServiceImp userService;
    private final ModelMapper modelMapper;

    @GetMapping("/{id}")
    public ResponseEntity<UserRes> getUser(@PathVariable Long id) {
        UserEntity userDB = userService.getUserById(id);
        UserRes userRes = modelMapper.map(userDB, UserRes.class);
        Set<RoleRes> roles = userDB.getRoles().stream()
                .map(role -> modelMapper.map(role, RoleRes.class))
                .collect(Collectors.toSet());
        userRes.setRoles(roles);
        return new ResponseEntity<>(userRes, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<Page<UserRes>> getAllUsers(Pageable pageable) {
        List<UserRes> userList= userService.getAllUsers(pageable).stream()
                                                        .map(user -> modelMapper.map(user, UserRes.class)).toList();
        for (UserRes user: userList
             ) {
            Set<RoleRes> rolesRes = user.getRoles().stream()
                    .map(role -> modelMapper.map(role, RoleRes.class)).collect(Collectors.toSet());
            user.setRoles(rolesRes);
        }
        var page= new PageImpl<>(userList, pageable, userList.size());
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<UserRes> create(@RequestBody @Valid UserReq userReq) {
        var user = userService.create(modelMapper.map(userReq, UserEntity.class));
        return new ResponseEntity<>(modelMapper.map(user, UserRes.class), HttpStatus.CREATED);
    }

    @PutMapping()
    public ResponseEntity<UserRes> update(@RequestBody @Valid UserReq userReq) {
        var user = userService.update(modelMapper.map(userReq, UserEntity.class));
        return new ResponseEntity<>(modelMapper.map(user, UserRes.class), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
