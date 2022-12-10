package com.sda.backend.orderlines;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "Orderline")
public class Orderline {

    @Id
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
