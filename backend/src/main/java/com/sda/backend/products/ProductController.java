package com.sda.backend.products;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private IProductService productServices;

    @GetMapping
    public List<ProductModel> getProducts() {
        return productServices.findAllProduct();
    }

    @GetMapping("/{id}")
    public ProductModel getProductById(@PathVariable(value = "id") Integer id) {
        return productServices.findById(id);
    }
}
