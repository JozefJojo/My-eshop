package com.sda.backend.orders;

import java.util.List;

public interface IOrderService {
    List<Order> findAllOrders();

    Order findById(Integer id);

    Order createOrder(OrderInputModel order);

    List<Order> findByUserId(int userId);

    void deleteById(int orderId);
}
