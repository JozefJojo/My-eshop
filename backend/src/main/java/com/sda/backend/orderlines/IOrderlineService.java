package com.sda.backend.orderlines;

import java.util.List;

public interface IOrderlineService {
    List<Orderline> findAllOrderlines();

    Orderline findById(Integer id);

    Orderline createOrderline(Orderline orderline);
}
