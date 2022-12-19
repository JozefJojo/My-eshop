package com.sda.backend.orders;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Query(value = "SELECT * FROM Order o WHERE o.userId = :userId", nativeQuery = true)
    List<Order> findByUserId(int userId);

    @Modifying
    @Query(value = "INSERT INTO OrderToOrderline VALUES (:orderId, :orderlineId)", nativeQuery = true)
    void createOrderToOrderline(@Param("orderId") int orderId, @Param("orderlineId") int orderlineId);
}
