package com.sda.backend.orderlines;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderlineRepository extends JpaRepository<Orderline,Integer> {
}
