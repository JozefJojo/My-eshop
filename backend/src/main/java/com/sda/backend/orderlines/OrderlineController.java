package com.sda.backend.orderlines;

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
@RequestMapping("/orderlines")
public class OrderlineController {
    @Autowired
    private IOrderlineService orderlineService;

    @GetMapping
    public List<Orderline> getOrderlines() {

        return orderlineService.findAllOrderlines();
    }

    @GetMapping("/{id}")
    public Orderline getOrderlineById(@PathVariable(value = "id") Integer id) {
        return orderlineService.findById(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Orderline> createOrderline(@RequestBody Orderline newOrderline) throws Exception {
        var orderline = orderlineService.createOrderline(newOrderline);

        if (orderline == null) {
            throw new ServerException("The user has not been created");
        }

        return new ResponseEntity<>(orderline, HttpStatus.CREATED);
    }
}
