package com.cargoconditions.backend.Repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.cargoconditions.backend.Models.Cargo;

@Repository
public interface CargoRepository extends MongoRepository<Cargo, String>{
    @Query("{'overseer': ?0 }")
    List<Cargo> findAllByOverseer(String overseer);
}
