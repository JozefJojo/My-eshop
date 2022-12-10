package com.sda.backend.orderlines;

import com.sda.backend.producers.Producer;
import com.sda.backend.producers.ProducerRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class OrderlineService implements IOrderlineService {
    private OrderlineRepository orderlineRepository;

    public OrderlineService(OrderlineRepository orderlineRepository) {
        this.orderlineRepository = orderlineRepository;
    }

    @Override
    public List<Orderline> findAllOrderlines() { return orderlineRepository.findAll(); }

    @Override
    public Orderline findById(Integer id) { return orderlineRepository.findById(id).get(); }

    @Override
    public Orderline createOrderline(Orderline orderline) {
        return this.orderlineRepository.save(orderline);
    }
}
