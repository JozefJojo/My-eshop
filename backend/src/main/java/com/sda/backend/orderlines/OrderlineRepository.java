package com.sda.backend.orderlines;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderlineRepository extends JpaRepository<Orderline,Integer> {
    @Query(value = "SELECT * FROM Orderline o WHERE o.userId = :userId", nativeQuery = true)
    List<Orderline> findByUserId(int userId);
    @Modifying
    @Query(value = "UPDATE Orderline o SET o.amount = :amount, o.totalPrice = :totalPrice WHERE o.id = :id", nativeQuery = true)
    void updateAmountAndTotalPriceById(int id, float totalPrice, int amount);
}
