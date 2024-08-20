package com.no_country.justina.repository;

import com.no_country.justina.model.entities.DrugRoute;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrugRouteRepository extends JpaRepository<DrugRoute, Long> {
}
