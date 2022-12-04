package com.sda.backend.users;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Integer id;

    @Column(name = "email")
    public String email;

    @Column(name = "name")
    public String name;

    @Column(name = "picture")
    public String picture;

    @Column(name = "city")
    public String city;

    @Column(name = "address")
    public String address;

    @Column(name = "role")
    public String role;
}
