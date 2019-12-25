package com.example.jimapp.api.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    private void saveProduct(Product product){
        productRepository.save(product);
    }

    @PostMapping("/delete/{Id}")
    @ResponseBody
    public void deleteById(@PathVariable Long Id){
        productRepository.deleteById(Id);
    }

    @GetMapping("/{id}")
    public Optional<Product> findById(@PathVariable Long id){
        return productRepository.findById(id);
    }

    @PostMapping("/user-product/{userId}")
    @ResponseBody
    public Iterable<Product> findByUserId(@PathVariable Long userId){
        return productRepository.findByUserId(userId);
    }

    @PostMapping("/update/{Id}/{CategoryId}")
    @ResponseBody
    public Product update(@PathVariable Long Id, @PathVariable Long CategoryId, @RequestBody Product newProduct){
        Product product = productRepository.findByIdAndAndCategoryId(Id, CategoryId);
        if(newProduct.getName() != null) product.setName(newProduct.getName());
        if(newProduct.getDetail() != null) product.setDetail(newProduct.getDetail());
        if(newProduct.getPrice() != null) product.setPrice(newProduct.getPrice());
        if(newProduct.getQuantity() != null) product.setQuantity(newProduct.getQuantity());
        if(newProduct.getImg() != null) product.setImg(newProduct.getImg());
        if(newProduct.getCategoryId() != null) product.setCategoryId(newProduct.getCategoryId());
        this.saveProduct(product);
        return product;
    }
}
