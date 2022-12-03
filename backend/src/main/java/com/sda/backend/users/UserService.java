package com.sda.backend.users;

import com.sda.backend.products.ProductModel;

import java.util.List;

public class UserService implements IUserService {


    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public User findById(Integer id) {
        return this.userRepository.findById(id).get();
    }
}
