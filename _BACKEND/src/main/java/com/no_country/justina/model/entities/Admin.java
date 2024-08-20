package com.no_country.justina.model.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Admin {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @Column(length = 25)
  private String docIdentity;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "user_id")
  private UserEntity user;
}
