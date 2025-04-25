//package com.example.bar.bar.controller;
//
//import com.example.bar.bar.entity.User;
//import com.example.bar.bar.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/user")
//public class UserApiController {
//
//    @Autowired
//    private UserService userService;
//
//    @GetMapping
//    public ResponseEntity<List<User>> findAll() {
//        try {
//            List<User> users = userService.findAll();
//            if (users.isEmpty()) {
//                return ResponseEntity.noContent().build();
//            }
//            return ResponseEntity.ok(users);
//        } catch (Exception e) {
//            return ResponseEntity.internalServerError().build();
//        }
//    }
//}
