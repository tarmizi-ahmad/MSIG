package com.msig.test.service;

import com.msig.test.model.Product;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts();
    List<Product> getPendingProducts();
    Product addProduct(Product product);
    Product updateProduct(Long id, Product productDetails);
    Product approveProduct(Long id);
    Product rejectProduct(Long id);
    void deleteProduct(Long id);
}
