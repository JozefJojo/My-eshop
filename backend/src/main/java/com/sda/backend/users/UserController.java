package com.sda.backend.users;

import com.sda.backend.products.ProductModel;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping
    public List<User> getUsers() {
        return userService.findAllUsers();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> create(@RequestBody User newUser) throws Exception {
        var user = userService.create(newUser);

        if (user == null) {
            throw new ServerException("The user has not been created");
        }

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> edit(@RequestBody User newUser) throws Exception {
        var user = userService.update(newUser);

        if (user == null) {
            throw new ServerException("This user cannot be updated.");
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public User getUserById(@PathVariable(value = "id") Integer id) {
        return userService.findById(id);
    }

    @GetMapping("/email/{email}")
    public User getUserByName(@PathVariable(value = "email") String email) {
        return userService.findByEmail(email);
    }
}
