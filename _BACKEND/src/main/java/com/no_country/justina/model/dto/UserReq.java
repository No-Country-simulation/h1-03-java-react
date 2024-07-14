package com.no_country.justina.model.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserReq {
  private Long id;
  @NotBlank private String name;
  @NotBlank private String lastname;
  @NotBlank private String email;
  @NotBlank private String password;
}
