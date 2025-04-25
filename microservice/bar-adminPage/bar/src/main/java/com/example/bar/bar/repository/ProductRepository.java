package com.example.bar.bar.repository;

import com.example.bar.bar.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}