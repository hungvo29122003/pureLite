package com.example.bar.bar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {

    @GetMapping("/test-images")
    public String testImages() {
        return "test-images";
    }
} 