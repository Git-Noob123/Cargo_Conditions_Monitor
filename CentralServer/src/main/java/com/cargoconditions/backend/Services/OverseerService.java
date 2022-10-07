package com.cargoconditions.backend.Services;

import org.springframework.stereotype.Service;

import com.cargoconditions.backend.Repositories.OverseerRepository;

import lombok.AllArgsConstructor;
import com.cargoconditions.backend.Models.Overseer;


@Service
@AllArgsConstructor
public class OverseerService {
    private OverseerRepository overseerRepository;

    public Overseer save(Overseer overseer){
        return overseerRepository.save(overseer);
    }
}
