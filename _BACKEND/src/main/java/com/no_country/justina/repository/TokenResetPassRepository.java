package com.no_country.justina.repository;

import com.no_country.justina.model.entities.TokenResetPass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TokenResetPassRepository extends JpaRepository<TokenResetPass, Long> {
    Optional<TokenResetPass> findByToken(String token);
}
