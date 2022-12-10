package com.sda.backend.products;

import com.sda.backend.producers.Producer;
import com.sda.backend.producers.ProducerRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ProductService implements IProductService {

    private ProductRepository productRepository;
    private ProducerRepository producerRepository;

    public ProductService(ProductRepository productRepository, ProducerRepository producerRepository) {
        this.productRepository = productRepository;
        this.producerRepository = producerRepository;
    }

    @Override
    public List<ProductModel> findAllProduct() {

        var products =  productRepository.findAll();
        var productModels = new ArrayList<ProductModel>();

        for (var product: products) {
            Producer producer = null;
            try {
                producer = producerRepository.findById(product.getProducerId()).orElseThrow();
            }
            catch (NoSuchElementException e) {
                System.out.println("No producer has been found.");
            }


            var productModel = new ProductModel() {
                {
                    id = product.id;
                    title = product.title;
                    description = product.description;
                    thumbnail = product.thumbnail;
                    categoryId = product.categoryId;
                    price = product.price;
                    producerName = "";
                }
            };
            if (producer != null) {
                productModel.producerName = producer.getName();
            }

            productModels.add(productModel);
        }

        return productModels;
    }

    @Override
    public ProductModel findById(Integer id) {
        var product = productRepository.findById(id).get();
        Producer producer = null;
        try {
            producer = producerRepository.findById(product.producerId).get();
        }
        catch (NoSuchElementException e) {
            System.out.println("No producer has been found.");
        }

        var productModel = new ProductModel() {{
            id = product.id;
            title = product.title;
            description = product.description;
            thumbnail = product.thumbnail;
            categoryId = product.categoryId;
            price = product.price;
            producerName = "";
        }};
        if (producer != null) {
            productModel.producerName = producer.getName();
        }

        return productModel;
    }
}
