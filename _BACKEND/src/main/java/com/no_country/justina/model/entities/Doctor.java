package com.no_country.justina.model.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(length = 25)
    private String phone;
    @Column(length = 100)
    private String address;
    @Column(length = 10)
    private String license;

    @OneToOne(cascade = CascadeType.ALL)
    private UserEntity userEntity;

    @ManyToOne
    @JoinColumn(name = "specialty_id")
    private Specialty specialty;
}
