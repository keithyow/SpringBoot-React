package com.example.sakila.domain;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface PaymentRepo extends CrudRepository<Payment, Long> {
    @Query("select p from Payment p")
    public List<Payment> search(Pageable pagination);
}
