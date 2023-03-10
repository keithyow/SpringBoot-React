package com.example.sakila.controller;

import com.example.sakila.domain.Payment;
import com.example.sakila.domain.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PaymentController {
    @Autowired
    private PaymentRepo paymentRepo;

    @GetMapping("/payment")
    public List<Payment> findAll(){
        return paymentRepo.search(Pageable.ofSize(10));
    }

    @DeleteMapping("/payment/{id}")
    public String delete(@PathVariable Long id) {
        Payment pmt = paymentRepo.findById(id).get();
        paymentRepo.delete(pmt);
        return "ok";
    }
}
