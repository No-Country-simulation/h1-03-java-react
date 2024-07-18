package com.no_country.justina.model.entities;

import com.no_country.justina.model.enums.Role;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    private String name;
    private String lastname;
    private String email;
    private String password;
    private LocalDateTime createdAt;
    private boolean isEnabled;
    @Enumerated(EnumType.STRING)
    private Role role;

    @PrePersist
    public void onCreate(){
        this.createdAt = LocalDateTime.now();
        this.isEnabled = true;
    }

    @OneToOne(mappedBy = "userEntity")
    private Admin admin;
    @OneToOne(mappedBy = "userEntity")
    private Doctor doctor;
    @OneToOne(mappedBy = "user")
    private Patient patient;
}