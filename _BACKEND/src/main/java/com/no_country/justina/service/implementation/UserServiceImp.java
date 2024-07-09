package com.no_country.justina.service.implementation;

import com.no_country.justina.exception.EmailExistsException;
import com.no_country.justina.exception.UserIdNotFoundException;
import com.no_country.justina.model.entities.User;
import com.no_country.justina.repository.UserRepository;
import com.no_country.justina.service.interfaces.IUserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class UserServiceImp implements IUserService {

    private UserRepository userRepository;
    @Override
    public User create(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new EmailExistsException();
        }
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUser(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public User update(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteById(Long id) {
        var userDb = userRepository.findById(id)
                .orElseThrow(() -> new UserIdNotFoundException(id));
        userDb.setEnabled(false);
        userRepository.save(userDb);
    }
}
