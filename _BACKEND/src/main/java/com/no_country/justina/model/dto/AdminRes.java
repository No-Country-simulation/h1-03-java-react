package com.no_country.justina.model.dto;

import com.no_country.justina.model.entities.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdminRes {
  private long id;
  private String docIdentity;
}
