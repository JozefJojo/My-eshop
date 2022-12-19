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

    @GetMapping(params = {"userId"})
    public List<Orderline> getOrderlinesByUserId(@RequestParam(name = "userId") int userId) {
        return orderlineService.findByUserId(userId);
    }

    @GetMapping(value = "models", params = {"userId"})
    public List<OrderlineModel> getOrderlineModelsByUserId(@RequestParam(name = "userId") int userId) {
        return orderlineService.findModelsByUserId(userId);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping
    public String deleteOrderlineById(@RequestParam(name = "orderlineId") int orderlineId) throws Exception {
        try {
            orderlineService.deleteById(orderlineId);
        } catch (Exception e) {
            throw new ServerException(String.format("Orderline with id %d has not been successfully removed.", orderlineId));
        }

        return String.format("Orderline with id %d has been successfully removed.", orderlineId);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping
    public String updateOrderlineAmountById(@RequestParam(name = "orderlineId") int orderlineId, @RequestParam(name = "amount") int amount) throws Exception {
        try {
            orderlineService.updateAmountById(orderlineId, amount);
        } catch (Exception e) {
            throw new ServerException(String.format("Orderline's amount with id %d has not been successfully updated.", orderlineId));
        }

        return String.format("Orderline's amount with id %d has been successfully updated.", orderlineId);
    }





    @GetMapping("/{id}")
    public Orderline getOrderlineById(@PathVariable(value = "id") int id) {
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
