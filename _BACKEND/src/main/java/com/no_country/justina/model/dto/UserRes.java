package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserRes {
  private long id;
  private String name;
  private String lastname;
  private String email;
  private LocalDateTime createdAt;
  private Role role;
  private long idFromRole;
}
