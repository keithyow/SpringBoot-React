package com.example.demo.domain;

import org.springframework.data.repository.CrudRepository;

// Long - primary key data type
// this class is used for queries ( select, insert, update, delete)
public interface CarRepository extends CrudRepository<Car, Long> {

}
