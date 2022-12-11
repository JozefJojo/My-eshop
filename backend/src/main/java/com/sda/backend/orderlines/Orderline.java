package com.sda.backend.orderlines;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Orderline")
public class Orderline {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Integer id;

    @Column(name = "productId")
    public Integer productId;

    @Column(name = "userId")
    public Integer userId;

    @Column(name = "amount")
    public Integer amount;

    @Column(name = "totalPrice")
    public float totalPrice;
}
