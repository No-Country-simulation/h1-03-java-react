package com.no_country.justina.repository;

import com.no_country.justina.model.entities.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    boolean existsByEmail(String email);

    Optional<UserEntity> findByEmail(String email);
    Optional<UserEntity> findByIdAndIsEnabledTrue(Long id);
    Page<UserEntity> findByIsEnabledTrue(Pageable pageable);
}
