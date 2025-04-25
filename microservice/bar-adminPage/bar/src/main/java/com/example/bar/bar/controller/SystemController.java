package com.example.bar.bar.controller;

import com.example.bar.bar.entity.Authority;
import com.example.bar.bar.entity.AuthorityId;
import com.example.bar.bar.entity.User;
import com.example.bar.bar.repository.AuthorityRepository;
import com.example.bar.bar.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/system")
public class SystemController {
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private AuthorityRepository authRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public String home(Model model) {
        model.addAttribute("users", userRepo.findAll());
        model.addAttribute("authorities", authRepo.findAll());
        return "system/home";
    }

    @GetMapping("/users/add")
    public String showAddUserForm(Model model) {
        model.addAttribute("user", new User());
        return "system/add-user";
    }

    @PostMapping("/users/add")
    public String addUser(@Valid @ModelAttribute("user") User user, BindingResult result) {
        if (result.hasErrors()) {
            return "system/add-user";
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepo.save(user);
        return "redirect:/system";
    }

    @GetMapping("/users/edit/{username}")
    public String showEditUserForm(@PathVariable String username, Model model) {
        User user = userRepo.findById(username).orElseThrow(() -> new IllegalArgumentException("Invalid user"));
        model.addAttribute("user", user);
        return "system/edit-user";
    }

    @PostMapping("/users/edit/{username}")
    public String editUser(@PathVariable String username, @Valid @ModelAttribute("user") User user, BindingResult result) {
        if (result.hasErrors()) {
            return "system/edit-user";
        }
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepo.save(user);
        return "redirect:/system";
    }

    @GetMapping("/users/delete/{username}")
    public String deleteUser(@PathVariable String username) {
        userRepo.deleteById(username);
        return "redirect:/system";
    }

    @GetMapping("/authorities/add")
    public String showAddAuthorityForm(Model model) {
        model.addAttribute("authority", new Authority());
        return "system/add-authority";
    }

    @PostMapping("/authorities/add")
    public String addAuthority(@Valid @ModelAttribute("authority") Authority authority, BindingResult result) {
        if (result.hasErrors()) {
            return "system/add-authority";
        }
        authRepo.save(authority);
        return "redirect:/system";
    }

    @GetMapping("/authorities/delete/{username}/{authority}")
    public String deleteAuthority(@PathVariable String username, @PathVariable String authority) {
        authRepo.deleteById(new AuthorityId(username, authority));
        return "redirect:/system";
    }
}
