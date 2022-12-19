package com.sda.backend.orders;

import com.sda.backend.orderlines.Orderline;
import com.sda.backend.products.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService implements IOrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Order> findAllOrders() { return orderRepository.findAll(); }

    @Override
    public Order findById(Integer id) { return orderRepository.findById(id).get(); }

    @Override
    @Transactional(propagation= Propagation.REQUIRES_NEW)
    public Order createOrder(OrderInputModel newOrder) {

        var order = new Order();
        order.userId = newOrder.userId;
        order.totalCost = newOrder.totalPrice;
        order.deliveryAddress = newOrder.address;

        var result = orderRepository.save(order);

        for (Orderline orderline : newOrder.orderlines) {
            orderRepository.createOrderToOrderline(result.id, orderline.id);
        }



        return order;
    }

    @Override
    public List<Order> findByUserId(int userId) {
        return orderRepository.findByUserId(userId);
    }

    @Override
    public void deleteById(int orderId) {
        orderRepository.deleteById(orderId);
    }
}
