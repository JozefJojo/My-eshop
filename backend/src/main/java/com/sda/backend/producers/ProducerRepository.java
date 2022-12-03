package com.sda.backend.producers;

import com.sda.backend.producers.Producer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProducerRepository extends JpaRepository<Producer,Integer> {
}
