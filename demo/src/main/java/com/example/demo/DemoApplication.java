package com.example.demo;

import com.example.demo.domain.Car;
import com.example.demo.domain.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	@Autowired // dependency injection
	CarRepository carRepository;
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("Hello world...");
	}

	// This method will run everytime we run a project
	@Override
	public void run(String... args) throws Exception {
		carRepository.save(new Car("Ford", "Mustang", "Red", "DWI123", 2003, 350000));
		carRepository.save(new Car("Ford", "Ranger", "Grey", "DW3123", 2003, 350000));
		carRepository.save(new Car("Ford", "G32", "White", "DWI12", 2003, 350000));
	}
}
