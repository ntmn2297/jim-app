package com.example.jimapp.api.product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    public Iterable<Product> findByName(String name);
}
