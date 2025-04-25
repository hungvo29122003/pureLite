//package com.example.bar.bar.service;
//
//import com.example.bar.bar.entity.User;
//import com.example.bar.bar.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//
//@Service
//public class UserServiceImpl implements UserService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUsername(username)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
//
//        return org.springframework.security.core.userdetails.User
//                .withUsername(user.getUsername())
//                .password(user.getPassword())
//                .authorities("ROLE_ADMIN")
//                .authorities("ROLE_STUDENT")
//                .authorities("ROLE_MANAGER")// Add appropriate roles/authorities based on your User entity
//                .build();
//    }
//
//    @Override
//    @Transactional(readOnly = true) // Tránh lỗi transaction xung đột với Spring Security
//    public List<User> findAll() {
//        return userRepository.findAll();
//    }
//}