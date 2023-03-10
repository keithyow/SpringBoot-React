package com.example.sakila.controller;

import com.example.sakila.domain.Investment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class InvestmentController {
    @GetMapping("/investment")
    public List<Investment> generateResult(@RequestParam int amount, @RequestParam int years, @RequestParam int rate){
        ArrayList<Investment> lists = new ArrayList<>();
        int start = amount;
        int total = years;
        int profitRate = rate;
        int currYear = 2023;

        for(int i = 0; i < total; i++){
            int profit = start * profitRate / 100;

            Investment investment = new Investment(currYear, start, profit);
            lists.add(investment);
            start += profit;
            currYear++;
        }

        return lists;
    }
}
