package com.sda.backend.orders;

import com.sda.backend.orderlines.Orderline;

import java.util.List;

public class OrderInputModel {

    public int userId;
    public String address;
    public float totalPrice;
    public List<Orderline> orderlines;

}
