package com.sda.backend.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * FROM User u WHERE u.name=:name", nativeQuery = true)
    public User findByName(String name);

    @Query(value = "SELECT * FROM User u WHERE u.email=:email", nativeQuery = true)
    User findByEmail(String email);
}
