package com.example.sakila.controller;

import com.example.sakila.domain.GuessGame;
import com.example.sakila.domain.GuessGameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class GuessGameController {

    @Autowired
    GuessGameRepo guessGameRepo;

    @GetMapping("/guess-game/start")
    public int start(){
        int no = (int) (Math.random() * 100);
        GuessGame gg = new GuessGame();
        gg.setAnswer(no);
        guessGameRepo.save(gg);
        return gg.getId();
    }


    @GetMapping("/guess-game/guess/{id}/{number}")
    public ResponseEntity<String> guess(@PathVariable int id, @PathVariable int number){
        Optional<GuessGame> opt = guessGameRepo.findById(id);
        int answer;

        if(opt.isPresent()) {
            GuessGame answerGG = opt.get();
            answer = answerGG.getAnswer();
        } else{
            return ResponseEntity.badRequest().body("No ID for that Answer");
        }

        if(number == answer){
            return ResponseEntity.ok().contentType(MediaType.TEXT_PLAIN).body("Congrats! You've Guessed the Correct Number!");
        } else if (number < answer) {
            return ResponseEntity.ok().contentType(MediaType.TEXT_PLAIN).body("Your guess is wrong. Try again (Hint: The answer value is higher.)");
        }else {
            return ResponseEntity.ok().contentType(MediaType.TEXT_PLAIN).body("Your guess is wrong. Try again (Hint: The answer value is lower.)");
        }

    }
}
