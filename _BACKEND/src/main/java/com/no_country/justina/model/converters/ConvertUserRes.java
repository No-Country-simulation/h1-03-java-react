package com.no_country.justina.model.converters;

import com.no_country.justina.model.dto.UserRes;
import com.no_country.justina.model.entities.UserEntity;
import org.modelmapper.AbstractConverter;
import org.springframework.stereotype.Component;

@Component
public class ConvertUserRes extends AbstractConverter<UserEntity, UserRes> {
  @Override
  protected UserRes convert(UserEntity user) {
    long idRole;
    if(user.getPatient() != null) {
      idRole = user.getPatient().getIdPatient();
    }
    else if(user.getDoctor() != null){
      idRole = user.getDoctor().getId();
    }
    else if(user.getAdmin() != null){
      idRole=user.getAdmin().getIdAdmin();
    }
    else {
      throw new IllegalArgumentException("este usuario no tiene un rol creado.");
    }
    return new UserRes(
            user.getIdUser(),
            user.getName(),
            user.getLastname(),
            user.getLastname(),
            user.getCreatedAt(),
            user.getRoles(),
            idRole
    );
  }
}
