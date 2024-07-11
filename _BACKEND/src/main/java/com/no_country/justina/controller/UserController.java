package com.no_country.justina.controller;

import com.no_country.justina.model.dto.UserReq;
import com.no_country.justina.model.dto.UserRes;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.service.implementation.UserServiceImp;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {
    private UserServiceImp userService;
    private ModelMapper modelMapper;

    @GetMapping("/{id}")
    public ResponseEntity<UserRes> getUser(@PathVariable Long id) {
        UserRes userReq = modelMapper.map(userService.getUser(id), UserRes.class);
        return new ResponseEntity<>(userReq, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<Page<UserRes>> getAllUsers(Pageable pageable) {
        var userList= userService.getAllUsers(pageable).stream()
                                                        .map(user -> modelMapper.map(user, UserRes.class)).toList();
        var page= new PageImpl<>(userList, pageable, userList.size());
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<UserRes> create(@RequestBody UserReq userReq) {
        var user = userService.create(modelMapper.map(userReq, UserEntity.class));
        return new ResponseEntity<>(modelMapper.map(user, UserRes.class), HttpStatus.CREATED);
    }

    @PutMapping()
    public ResponseEntity<UserRes> update(@RequestBody UserReq userReq) {
        var user = userService.update(modelMapper.map(userReq, UserEntity.class));
        return new ResponseEntity<>(modelMapper.map(user, UserRes.class), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
