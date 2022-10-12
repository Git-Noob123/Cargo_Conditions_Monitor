package com.cargoconditions.backend.Services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

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


    public Boolean validate(Overseer user){
        List<String> id = new ArrayList<>(); 
        id.add(user.getUsername());
        Iterable<String> idItr = id;
        Iterable<Overseer> allUsersItr = overseerRepository.findAllById(idItr);
        List<Overseer> out = new ArrayList<>();
        allUsersItr.forEach(out::add);

        if(out.isEmpty()) return false;

        String correctPassword = out.get(0).getPassword();

        if(!user.getPassword().equals(correctPassword)) return false;

        return true;
    }
}
