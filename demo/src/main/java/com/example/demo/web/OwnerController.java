package com.example.demo.web;

import com.example.demo.domain.Owner;
import com.example.demo.domain.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class OwnerController {
    @Autowired
    OwnerRepository ownerRepository;

    @RequestMapping("/new-owner")
    public Owner newOwner(){
        Owner owner = new Owner("John", "Doe");
        ownerRepository.save(owner);
        return owner;
    }

    @PostMapping("/new-owner2")
    public Owner newOwner(@RequestParam String firstName, @RequestParam String lastName){
        Owner owner = new Owner(firstName, lastName);
        ownerRepository.save(owner);
        return owner;
    }
    @RequestMapping("/owners")
    public Iterable<Owner> getOwners(){
        return ownerRepository.findAll();
    }

    @GetMapping("/find-juan")
    public Optional<Owner> getOwner(@RequestBody Long id){
        return ownerRepository.findById(id);
    }

    @DeleteMapping("/delete-owner")
    public String deleteOwner(@RequestBody Long id){
        ownerRepository.deleteById(id);
        return "ok";
    }

    @PutMapping("/update-owner/{id}/{firstName}")
    public Owner updateOwner(@PathVariable("id") Long id, @PathVariable("firstName") String firstName){
        Optional<Owner> opt = ownerRepository.findById(id);
        if(opt.isPresent()){
            Owner owner = opt.get();
            owner.setFirstName(firstName);
            ownerRepository.save(owner);
            return owner;
        } else {
            return new Owner();
        }

    }
}
