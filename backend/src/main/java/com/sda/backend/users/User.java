package com.sda.backend.users;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "id")
    public Integer id;

    @Column(name = "email")
    public String email;

    @Column(name = "password")
    public String password;

    @Column(name = "city")
    public String city;

    @Column(name = "address")
    public String address;

    @Column(name = "role")
    public String role;

    @Column(name = "cartId")
    public String cartId;
}
