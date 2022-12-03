package com.sda.backend.products;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JpaProductServices implements ProductServices{

    private ProductRepository productRepository;
    private ProducerRepository producerRepository;

    public JpaProductServices(ProductRepository productRepository, ProducerRepository producerRepository) {
        this.productRepository = productRepository;
        this.producerRepository = producerRepository;
    }

    @Override
    public List<ProductModel> findAllProduct() {

        var products =  productRepository.findAll();
        var productModels = new ArrayList<ProductModel>();

        for (var product: products) {
            var producer = producerRepository.findById(product.getProducerId()).get();

            var productModel = new ProductModel() {
                {
                    id = product.id;
                    title = product.title;
                    description = product.description;
                    thumbnail = product.thumbnail;
                    categoryId = product.categoryId;
                    price = product.price;
                    producerName = producer.getName();

                }
            };
            productModels.add(productModel);
        }

        return productModels;
    }
}
