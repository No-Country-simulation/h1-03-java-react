package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.EmailExistsException;
import com.no_country.justina.exception.UserIdNotFoundException;
import com.no_country.justina.model.entities.Role;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.UserRepository;
import com.no_country.justina.service.interfaces.IUserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements IUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public UserEntity create(UserEntity user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new EmailExistsException();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRoles(List.of(new Role( 1L, "USER")));
        return userRepository.save(user);
    }

    @Override
    public Optional<UserEntity> getUser(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Page<UserEntity> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public UserEntity update(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    @Override
    public void deleteById(Long id) {
        var userDb = userRepository.findById(id)
                .orElseThrow(() -> new UserIdNotFoundException(id));
        userDb.setEnabled(false);
        userRepository.save(userDb);
    }
}
