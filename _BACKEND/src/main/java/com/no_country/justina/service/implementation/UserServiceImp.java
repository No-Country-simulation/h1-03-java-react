package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.EmailExistsException;
import com.no_country.justina.exception.UserIdNotFoundException;
import com.no_country.justina.model.entities.*;
import com.no_country.justina.repository.UserRepository;
import com.no_country.justina.service.interfaces.IUserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements IUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;

    @Override
    public UserEntity create(UserEntity user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new EmailExistsException();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Set<Role> roles = new HashSet<>();
        for (Role role : user.getRoles()) {
            Role roleDB = roleService.getById(role.getIdRole());
            roles.add(roleDB);
        }
        user.setRoles(roles);
        return userRepository.save(user);
    }

    @Override
    public UserEntity getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(()->new UserIdNotFoundException(id));
    }

    @Override
    public Page<UserEntity> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public UserEntity update(UserEntity userEntity) {
        UserEntity userDB = userRepository.findById(userEntity.getId())
                                            .orElseThrow(() -> new EntityNotFoundException(
                                            "El usuario con id " + userEntity.getId()+
                                            " no se encuentra en base de datos"));
        if (userEntity.getName() != null) {
            userDB.setName(userEntity.getName());
        }
        if (userEntity.getLastname() != null) {
            userDB.setLastname(userEntity.getLastname());
        }
        if (userEntity.getEmail() != null & !userRepository.existsByEmail(userEntity.getEmail())) {
            userDB.setEmail(userEntity.getEmail());
        }
        if (userEntity.getPassword() != null) {
            userDB.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        }
        return userRepository.save(userDB);
    }

    @Override
    public void deleteById(Long id) {
        var userDb = userRepository.findById(id)
                .orElseThrow(() -> new UserIdNotFoundException(id));
        userDb.setEnabled(false);
        userRepository.save(userDb);
    }
}
