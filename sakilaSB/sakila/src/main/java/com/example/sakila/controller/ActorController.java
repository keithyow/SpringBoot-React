package com.example.sakila.controller;

import com.example.sakila.domain.Actor;
import com.example.sakila.domain.ActorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ActorController {

    @Autowired
    private ActorRepo actorRepo;

    @GetMapping("/actors")
    public Iterable<Actor> findAll(){
        return actorRepo.findAll();
    }
}
