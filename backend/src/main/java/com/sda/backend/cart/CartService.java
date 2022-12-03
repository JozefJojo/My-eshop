package com.sda.backend.cart;

import java.util.List;

public class CartService implements ICartService {


    private CartRepository userRepository;

    public CartService(CartRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<Cart> findAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public Cart findById(Integer id) {
        return this.userRepository.findById(id).get();
    }
}
