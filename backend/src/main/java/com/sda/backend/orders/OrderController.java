package com.sda.backend.orders;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private IOrderService orderService;

    @GetMapping
    public List<Order> getOrders() {

        return orderService.findAllOrders();
    }

    @GetMapping(params = {"userId"})
    public List<Order> getOrdersByUserId(@RequestParam(name = "userId") int userId) {
        return orderService.findByUserId(userId);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping
    public String deleteOrderById(@RequestParam(name = "orderId") int orderId) throws Exception {
        try {
            orderService.deleteById(orderId);
        } catch (Exception e) {
            throw new ServerException(String.format("Order with id %d has not been successfully removed.", orderId));
        }

        return String.format("Order with id %d has been successfully removed.", orderId);
    }

    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable(value = "id") int id) {
        return orderService.findById(id);
    }



    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Order> createOrder(@RequestBody OrderInputModel newOrder) throws Exception {
        var order = orderService.createOrder(newOrder);

        if (order == null) {
            throw new ServerException("The user has not been created");
        }

        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }
}
