package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IUserService {
    UserEntity create(UserEntity userEntity);
    Optional<UserEntity> getUser(Long id);
    Page<UserEntity> getAllUsers(Pageable pageable);
    UserEntity update(UserEntity userEntity);
    void deleteById(Long id);
}
