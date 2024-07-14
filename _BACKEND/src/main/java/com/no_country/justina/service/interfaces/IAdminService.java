package com.no_country.justina.service.interfaces;

import com.no_country.justina.model.entities.Admin;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IAdminService {
  Admin create(Admin admin);
  Admin getById(Long id);
  Page<Admin> getAll(Pageable pageable);
  Admin update(Admin admin);
  void deleteById(Long id);
}
