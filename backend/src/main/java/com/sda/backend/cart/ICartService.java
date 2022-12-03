package com.sda.backend.cart;

import java.util.List;

public interface ICartService {
    List<Cart> findAllUsers();

    Cart findById(Integer id);
}
