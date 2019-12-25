package com.example.jimapp.api.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/list")
    public Iterable<Category> getCategories(){
        return categoryRepository.findAll();
    }

    @PostMapping("/save")
    public Iterable<Category> saveCategories(@RequestBody List<Category> categories){
        return categoryRepository.saveAll(categories);
    }

    private void saveCategory(Category category){
        categoryRepository.save(category);
    }

    @PostMapping("/delete/{Id}")
    @ResponseBody
    public void deleteById(@PathVariable Long Id){
        categoryRepository.deleteById(Id);
    }

    @PostMapping("/update/{Id}/{Name}")
    @ResponseBody
    public Category update(@PathVariable Long Id, @PathVariable String Name, @RequestBody Category newCategory){
        Category category = categoryRepository.findByIdAndName(Id, Name);
        if(newCategory.getDetail() != null) category.setDetail(newCategory.getDetail());
        if(newCategory.getImg() != null) category.setImg(newCategory.getImg());
        this.saveCategory(category);
        return category;
    }
}
