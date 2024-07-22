package com.no_country.justina.model.dto;

import com.no_country.justina.model.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

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
  private Set<Role> role;
}
