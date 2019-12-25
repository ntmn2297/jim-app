package com.example.jimapp.api.product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    public Iterable<Product> findByName(String name);
    public Iterable<Product> findByUserId(Long userId);
    public void deleteById(Long Id);
    public Product findByIdAndAndCategoryId(Long Id, Long CategoryId);
}
