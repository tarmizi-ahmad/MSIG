package com.msig.test.service.impl;

import com.msig.test.model.Product;
import com.msig.test.repository.ProductRepository;
import com.msig.test.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getPendingProducts() {
        return productRepository.findByStatus(Product.Status.PENDING);
    }

    @Override
    public Product addProduct(Product product) {
        product.setStatus(Product.Status.PENDING);
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepository.findById(id).orElseThrow();
        product.setName(productDetails.getName());
        product.setPrice(productDetails.getPrice());
        product.setDescription(productDetails.getDescription());
        return productRepository.save(product);
    }

    @Override
    public Product approveProduct(Long id) {
        Product product = productRepository.findById(id).orElseThrow();
        product.setStatus(Product.Status.APPROVED);
        return productRepository.save(product);
    }

    @Override
    public Product rejectProduct(Long id) {
        Product product = productRepository.findById(id).orElseThrow();
        product.setStatus(Product.Status.REJECTED);
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
