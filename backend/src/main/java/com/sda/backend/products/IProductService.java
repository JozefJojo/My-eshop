package com.sda.backend.products;

import java.util.List;

public interface IProductService {
    List<ProductModel> findAllProduct();

    ProductModel findById(Integer id);
}
