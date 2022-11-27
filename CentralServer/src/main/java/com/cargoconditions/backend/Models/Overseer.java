package com.cargoconditions.backend.Models;

import org.springframework.data.annotation.Id;

import lombok.Data;
import lombok.NonNull;

@Data
public class Overseer {
    @Id
    private String id;

    @NonNull
    private String username;
    private String password;

    public Overseer(String username, String password){
        super();
        this.username = username;
        this.id = username;
        this.password = password;
    }
}
