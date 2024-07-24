package com.no_country.justina.controller;

import com.no_country.justina.model.dto.RoleRes;
import com.no_country.justina.model.dto.UserReq;
import com.no_country.justina.model.dto.UserRes;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.service.implementation.UserServiceImp;
import com.no_country.justina.service.interfaces.IUserService;
import io.swagger.v3.oas.annotations.Operation;
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
    private final IUserService userService;
    private final ModelMapper modelMapper;

    @Operation(
            summary = "Traer informacion de usuario por id",
            description = "Devuelve informacion de usuario, por id pasado por parametro, si no se encuentra en base" +
                    "de datos un usuario con el id suministrado se devuelve una excepcion de entidad no encontrada"
    )
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

    @Operation(
            summary = "Traer lista de usuarios paginados",
            description = "Devuelve la lista de usuarios paginados"
    )
    @GetMapping()
    public ResponseEntity<Page<UserRes>> getAllUsers(Pageable pageable) {
        List<UserRes> userList = userService.getAllUsers(pageable).stream()
                .map(user -> modelMapper.map(user, UserRes.class)).toList();
        for (UserRes user : userList) {
            Set<RoleRes> rolesRes = user.getRoles().stream()
                    .map(role -> modelMapper.map(role, RoleRes.class)).collect(Collectors.toSet());
            user.setRoles(rolesRes);
        }
        var page = new PageImpl<>(userList, pageable, userList.size());
        return new ResponseEntity<>(page, HttpStatus.OK);
    }

    @Operation(
            summary = "Crear usuario",
            description = "Crea en base de datos una entidad de usuario, con los datos recibidos en el cuerpo de la " +
                    "solicitud, si ya existe el email ingresado en BD devuelve una excepcion de email ya registrado," +
                    "sino devuelve los datos del usuario que se creo con estado 201 creado "
    )
    @PostMapping()
    public ResponseEntity<UserRes> create(@RequestBody @Valid UserReq userReq) {
        var user = userService.create(modelMapper.map(userReq, UserEntity.class));
        return new ResponseEntity<>(modelMapper.map(user, UserRes.class), HttpStatus.CREATED);
    }

    @Operation(
            summary = "Actualiza el usuario",
            description = "Actualiza el usuario, con los datos pasado por el cuerpo de la solicitud, " +
                    "si el id no se encuentra en base de datos, devuelve una excepcion de entidad no encontrada," +
                    "sino devuelve los datos de usuario que fueron actualizados"
    )
    @PutMapping()
    public ResponseEntity<UserRes> update(@RequestBody @Valid UserReq userReq) {
        var user = userService.update(modelMapper.map(userReq, UserEntity.class));
        return new ResponseEntity<>(modelMapper.map(user, UserRes.class), HttpStatus.OK);
    }

    @Operation(
            summary = "Eliminar usuario",
            description = "Realiza un borrado logico del usuario, si no se encuentra en BD por id devuelve una excepcion" +
                    "de usuario no encontrado en base de datos"
    )
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
