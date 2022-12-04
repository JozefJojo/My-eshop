package com.sda.backend.products;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "Product")
public class Product {

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

    @Column(name = "producerId")
    public Integer producerId;
}
