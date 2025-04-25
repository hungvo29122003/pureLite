package com.example.bar.bar.controller;

import com.example.bar.bar.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
    @Autowired
    private ProductRepository productRepo;

    @GetMapping
    public String home(Model model) {
        model.addAttribute("products", productRepo.findAll());
        return "home";
    }
}
