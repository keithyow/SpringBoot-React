package com.example.sakila.controller;

import com.example.sakila.domain.Rental;
import com.example.sakila.domain.RentalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RentalController {
    @Autowired
    private RentalRepo rentalRepo;

    @PostMapping("/save-rental")
    public Rental save(@RequestBody Rental rental){
        rentalRepo.save(rental);
        return rental;
    }
}
