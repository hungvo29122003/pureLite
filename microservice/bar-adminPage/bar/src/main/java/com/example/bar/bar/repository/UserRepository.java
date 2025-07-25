package com.example.bar.bar.repository;

import com.example.bar.bar.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
     Optional<User> findByUsername(String username) ;
}
