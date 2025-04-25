package com.example.bar.bar.controller;

import com.example.bar.bar.entity.LoginRequest;
import com.example.bar.bar.entity.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", methods = {RequestMethod.POST, RequestMethod.OPTIONS}) // Cho phép React gọi API
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            // Xác thực thông tin đăng nhập
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );

            // Lưu thông tin xác thực vào SecurityContext
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Trả về phản hồi thành công (có thể thêm thông tin người dùng hoặc token)
            return ResponseEntity.ok(new LoginResponse("Đăng nhập thành công", loginRequest.getUsername()));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(new LoginResponse("Tài khoản hoặc mật khẩu không đúng", null));
        }
    }
}
