package com.no_country.justina.model.dto;

import jakarta.validation.constraints.NotNull;
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
public class UserUpdateReq {
  @NotNull private Long id;
  @Pattern(regexp = "^[a-zA-Z'\\s]*$")
  @Size(min = 3)
  private String name;
  @Pattern(regexp = "^[a-zA-Z'\\s]*$")
  @Size(min = 3)
  private String lastname;
  @Pattern(regexp = "^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9-]{2,}\\.[a-zA-Z]{2,}$",
          message = "No coíncide con ^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9-]{2,}\\.[a-zA-Z]{2,}$")
  @Size(min = 10)
  private String email;
}
