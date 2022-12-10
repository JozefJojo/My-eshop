package com.sda.backend.users;

import com.sda.backend.products.ProductModel;

import java.util.List;

public interface IUserService {
    List<User> findAllUsers();

    User findById(Integer id);

    User create(User newUser);

    User findByName(String userName);

    User findByEmail(String email);
}
