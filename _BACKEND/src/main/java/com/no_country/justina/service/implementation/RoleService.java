package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Role;
import com.no_country.justina.repository.RoleRepository;
import com.no_country.justina.service.interfaces.IRoleService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleService implements IRoleService {

    private final RoleRepository roleRepository;

    @Override
    public Role getById(Long id) {
        return roleRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("El role con id " + id + " no se encuentra en base de datos"));
    }

    @Override
    public Page<Role> getAll(Pageable pageable) {
        return roleRepository.findAll(pageable);
    }
}
