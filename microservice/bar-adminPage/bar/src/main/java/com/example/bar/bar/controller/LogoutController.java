package com.example.bar.bar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("admin/logout")
public class LogoutController {
    @GetMapping("")
    public String logout() {
        return "login";
    }
}
