package com.example.jimapp.api.category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    public void deleteById(Long Id);
    public Category findByIdAndName(Long Id, String Name);
}
