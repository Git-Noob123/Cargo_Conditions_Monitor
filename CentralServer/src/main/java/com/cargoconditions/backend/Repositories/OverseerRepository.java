package com.cargoconditions.backend.Repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cargoconditions.backend.Models.Overseer;

@Repository
public interface OverseerRepository extends MongoRepository<Overseer, String>{
}
