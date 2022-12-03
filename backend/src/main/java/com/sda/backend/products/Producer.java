package com.sda.backend.products;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "producer")
public class Producer {

    @Id
    @Column(name = "id")
    public Integer Id;

    @Column(name = "name")
    public String Name;
}
