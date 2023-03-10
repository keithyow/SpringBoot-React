package com.example.sakila.domain;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CustomerRepo extends CrudRepository<Customer, Long> {
    @Query("select c from Customer c where firstName like %?1% or lastName like %?1%")
    public List<Customer> search(String name);
}
