package com.example.bar.bar.repository;

import com.example.bar.bar.entity.Authority;
import com.example.bar.bar.entity.AuthorityId;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthorityRepository extends JpaRepository<Authority, AuthorityId> {
    List<Authority> findByUsername(String username);
}
