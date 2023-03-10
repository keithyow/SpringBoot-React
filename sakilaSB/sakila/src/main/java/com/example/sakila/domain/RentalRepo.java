package com.example.sakila.domain;

import org.springframework.data.repository.CrudRepository;


public interface RentalRepo extends CrudRepository<Rental,Long> {
}
