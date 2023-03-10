package com.example.sakila.controller;

import com.example.sakila.domain.Film;
import com.example.sakila.domain.FilmRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class FilmController {

    @Autowired
    private FilmRepo filmRepo;

    @GetMapping("/films")
    public Iterable<Film> findAll(){
        return filmRepo.findAll();
    }

    @GetMapping("/films/{filmId}")
    public Film findOne(@PathVariable Long filmId){
        Optional<Film> opt = filmRepo.findById(filmId);
        return opt.orElseGet(Film::new);
    }

    @GetMapping("/films-search")
    public List<Film> search (@RequestParam String title){
        return filmRepo.search(title);
    }

    @PostMapping("/film-save")
    public Film save(@RequestBody Film film){
        Optional<Film> opt = filmRepo.findById(film.getFilmId());
        if (opt.isPresent()) {
            Film filmOri = opt.get();
            filmOri.setTitle(film.getTitle());
            filmOri.setDescription(film.getDescription());
            filmRepo.save(filmOri);
            return filmOri;
        } else{
            return new Film();
        }
    }
}
