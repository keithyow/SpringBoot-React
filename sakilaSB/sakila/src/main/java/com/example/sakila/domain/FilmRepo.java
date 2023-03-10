package com.example.sakila.domain;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface FilmRepo extends CrudRepository<Film, Long> {
    @Query("select f from Film f where title like %?1%")
    public List<Film> search (String title);
}
