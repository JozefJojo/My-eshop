package com.sda.backend.orderlines;

import com.sda.backend.producers.Producer;
import com.sda.backend.producers.ProducerRepository;
import com.sda.backend.products.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class OrderlineService implements IOrderlineService {

    @Autowired
    private OrderlineRepository orderlineRepository;
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Orderline> findAllOrderlines() { return orderlineRepository.findAll(); }

    @Override
    public Orderline findById(Integer id) { return orderlineRepository.findById(id).get(); }

    @Override
    @Transactional(propagation= Propagation.REQUIRES_NEW)

    public Orderline createOrderline(Orderline orderline) {
        var userOrderlines = this.orderlineRepository.findByUserId(orderline.userId);

        for (Orderline o :  userOrderlines) {
            if (orderline.productId == o.productId) {
                var product = productRepository.findById(orderline.productId).get();
                var amount = orderline.amount + o.amount;
                this.orderlineRepository.updateAmountAndTotalPriceById(o.id,amount * product.price, amount);
                var newOrdeline = o;
                newOrdeline.amount += orderline.amount;
                return newOrdeline;
            }
        }

        return this.orderlineRepository.save(orderline);
    }

    @Override
    public List<OrderlineModel> findModelsByUserId(int userId) {
        var orderlines = orderlineRepository.findByUserId(userId);
        var orderlinesModel = new ArrayList<OrderlineModel>();

        for (Orderline o : orderlines) {

            var product = productRepository.findById(o.productId).get();
            orderlinesModel.add(new OrderlineModel() {
                {
                    id = o.id;
                    title = product.title;
                    thumbnail = product.thumbnail;
                    totalPrice = o.totalPrice;
                    amount = o.amount;
                }
            });
        }
        return orderlinesModel;
    }

    @Override
    public List<Orderline> findByUserId(int userId) {
        return orderlineRepository.findByUserId(userId);
    }

    @Override
    public void deleteById(int orderlineId) {
        orderlineRepository.deleteById(orderlineId);
    }

    @Override
    @Transactional(propagation= Propagation.REQUIRES_NEW)
    public void updateAmountById(int orderlineId, int amount) {
        if (amount <= 0) {
            orderlineRepository.deleteById(orderlineId);
        }
        else {
            var orderline = orderlineRepository.findById(orderlineId).get();
            var product = productRepository.findById(orderline.productId).get();
            orderlineRepository.updateAmountAndTotalPriceById(orderlineId,amount * product.price, amount);
        }
    }
}
