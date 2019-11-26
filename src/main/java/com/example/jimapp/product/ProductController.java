package com.example.jimapp.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    private ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/list")
    public Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

    @PostMapping("/save")
    public Iterable<Product> saveProducts(@RequestBody List<Product> products) {
        return productRepository.saveAll(products);
    }

    @PostMapping("/find")
    public Iterable<Product> findProduct(@RequestBody String productName){
        return productRepository.findByName(productName);
    }

}
