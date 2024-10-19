package com.msig.test.controller;

import com.msig.test.model.Product;
import com.msig.test.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Product product = productService.approveProduct(id);
        product.setName(productDetails.getName());
        product.setPrice(productDetails.getPrice());
        product.setDescription(productDetails.getDescription());
        return productService.addProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @GetMapping("/pending")
    public List<Product> getPendingProducts() {
        return productService.getPendingProducts();
    }

    @PutMapping("/{id}/approve")
    public Product approveProduct(@PathVariable Long id) {
        return productService.approveProduct(id);
    }

    @PutMapping("/{id}/reject")
    public Product rejectProduct(@PathVariable Long id) {
        return productService.rejectProduct(id);
    }
}
