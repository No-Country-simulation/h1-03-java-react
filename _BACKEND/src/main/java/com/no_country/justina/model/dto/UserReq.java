package com.no_country.justina.model.dto;

import com.no_country.justina.model.enums.Role;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserReq {
  @NotBlank
  @Pattern(regexp = "^[a-zA-Z']*$")
  @Size(min = 3)
  private String name;
  @NotBlank
  @Pattern(regexp = "^[a-zA-Z']*$")
  @Size(min = 3)
  private String lastname;
  @NotBlank
  @Pattern(regexp = "^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9-]{2,}\\.[a-zA-Z]{2,}$",
          message = "No coíncide con ^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9-]{2,}\\.[a-zA-Z]{2,}$")
  @Size(min = 10)
  private String email;
  @NotBlank
  @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-_+|!¡@#$%^&\\.{}\\*\"'\\/()=?!¿'´~;,:<>°])[A-Za-z\\d-_+|!¡@#$%^&\\.{}\\*\"'\\/()=?!¿'´~;,:<>°]+$",
          message = "Mínimo una minúscula, mayúscula, número y carácter especial")
  @Size(min = 8, max = 16)
  private String password;
  private Role role;
}
