package com.no_country.justina.service.implementation;

import com.no_country.justina.model.entities.Admin;
import com.no_country.justina.model.entities.UserEntity;
import com.no_country.justina.repository.AdminRepository;
import com.no_country.justina.service.interfaces.IAdminService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminServiceImp implements IAdminService {
  private final AdminRepository adminRepo;
  @Override
  public Admin create(Admin admin) {
    return this.adminRepo.save(admin);
  }

  @Override
  public Admin getById(Long id) {
    return this.adminRepo.findById(id)
            .orElseThrow(()->new EntityNotFoundException("Administrado no encontrado, id: "+id));
  }

  @Override
  public Page<Admin> getAll(Pageable pageable) {
    return this.adminRepo.findAll(pageable);
  }

  @Override
  public Admin update(Admin admin) {
    this.verifyAdminExist(admin.getIdAdmin());
    return this.adminRepo.save(admin);
  }

  @Override
  public void deleteById(Long id) {
    this.verifyAdminExist(id);
    this.adminRepo.deleteById(id);
  }

  @Override
  public Admin createEmpty(UserEntity user) {
    Admin newAdmin = new Admin();
    newAdmin.setUserEntity(user);
    return this.adminRepo.save(newAdmin);
  }

  private void verifyAdminExist(long id){
    boolean exist = this.adminRepo.existsById(id);
    if(!exist) throw new EntityNotFoundException("Administrador no encontrado, id: "+id);
  }
}
