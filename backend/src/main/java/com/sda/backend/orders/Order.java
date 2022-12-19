package com.sda.backend.orders;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@Table(name = "Order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public Integer id;

    @Column(name = "totalCost")
    public float totalCost;

    @Column(name = "deliveryAddress")
    public String deliveryAddress;

    @Column(name = "userId")
    public int userId;

    @Column(name = "status")
    public String status = "PROCESSED";

    @Column(name = "created")
    public String created = new Date().toString();

}
