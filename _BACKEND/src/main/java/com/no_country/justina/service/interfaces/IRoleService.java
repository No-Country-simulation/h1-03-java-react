package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IRoleService {
    Role getById(Long id);
    Page<Role> getAll(Pageable pageable);
}
