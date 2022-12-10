package com.sda.backend.orderlines;

import javax.persistence.Column;
import javax.persistence.Id;

public class OrderlineModel {

    @Id
    @Column(name = "id")
    public Integer id;

    @Column(name = "title")
    public String title;

    @Column(name = "description")
    public String description;

    @Column(name = "thumbnail")
    public String thumbnail;

    @Column(name = "categoryId")
    public Integer categoryId;

    @Column(name = "price")
    public Float price;

    @Column(name = "producerName")
    public String producerName;
}
