package com.example.demo.web;

import com.example.demo.domain.Car;
import com.example.demo.domain.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CarController {
    @Autowired
    CarRepository carRepository;

    @RequestMapping("/cars")
    public Iterable<Car> getCars(){
        return carRepository.findAll();
    }

    @PostMapping("/new-car")
    public Car newCar(@RequestBody Car car){
        carRepository.save(car);
        return car;
    }
}
