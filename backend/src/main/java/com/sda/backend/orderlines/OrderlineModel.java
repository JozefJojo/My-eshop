package com.sda.backend.orderlines;

import javax.persistence.Column;
import javax.persistence.Id;

public class OrderlineModel {

    public int id;
    public String title;
    public String thumbnail;
    public float totalPrice;
    public int amount;

}
