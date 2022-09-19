package com.cargoconditions.backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cargoconditions.backend.Models.Cargo;

@Repository
public interface CargoRepository extends MongoRepository<Cargo, String>{
}
