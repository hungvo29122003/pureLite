package com.example.bar.bar.controller;

import com.example.bar.bar.entity.LoginRequest;
import com.example.bar.bar.entity.User;
import com.example.bar.bar.repository.UserRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

//@Controller
@Controller
public class LoginController {

    @GetMapping("/admin/login")
    public String login(@RequestParam(value = "error", required = false) String error,
                        @RequestParam(value = "logout", required = false) String logout,
                        Model model) {
        if (error != null) {
            model.addAttribute("error", "Tài khoản hoặc mật khẩu không đúng!");
        }
        if (logout != null) {
            model.addAttribute("message", "Đăng xuất thành công!");
        }
        return "login";
    }
}
