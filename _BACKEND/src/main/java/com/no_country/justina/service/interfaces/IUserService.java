package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IUserService {
    User create(User user);
    Optional<User> getUser(Long id);
    Page<User> getAllUsers(Pageable pageable);
    User update(User user);
    void deleteById(Long id);
}
