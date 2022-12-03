package com.sda.backend.cart;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/users")
public class CartController {

    @Autowired
    private ICartService userService;

    @GetMapping
    public List<Cart> getUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("/{id}")
    public Cart getUserById(@PathVariable(value = "id") Integer id) {
        return userService.findById(id);
    }

}
