package com.example.jimapp.api.normal_order;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NormalOrderRepository extends JpaRepository<NormalOrder, Long> {
    public NormalOrder findByIdAndName(Long Id, String Name);
}
