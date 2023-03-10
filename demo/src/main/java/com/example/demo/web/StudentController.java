package com.example.demo.web;

import com.example.demo.domain.Student;
import com.example.demo.domain.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    StudentRepository studentRepository;

    @PostMapping("/new-student")
    public Student newStudent(@RequestBody Student stu){
        studentRepository.save(stu);
        return stu;
    }

    @GetMapping("/all-student")
    public Iterable<Student> getStudent(){
        return studentRepository.findAll();
    }
}
