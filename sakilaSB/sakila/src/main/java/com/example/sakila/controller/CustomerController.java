package com.example.sakila.controller;

import com.example.sakila.domain.Customer;
import com.example.sakila.domain.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class CustomerController {
    @Autowired
    private CustomerRepo customerRepo;

    @GetMapping("/customer-search")
    public List<Customer> search (@RequestParam String name){
        return customerRepo.search(name);
    }
}
