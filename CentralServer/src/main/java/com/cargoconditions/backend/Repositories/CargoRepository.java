/*  CargoRepository.java   Jerry Dong     Virginia Tech       Sep 19, 2022 
 *  A DAO interface between the springboot application and database
 *  Modified Oct 12, 2022 to add findAllByOverseer
 */ 
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
