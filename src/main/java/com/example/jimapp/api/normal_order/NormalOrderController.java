package com.example.jimapp.api.normal_order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/normal-order")
public class NormalOrderController {
    private NormalOrderRepository normalOrderRepository;

    @Autowired
    public NormalOrderController(NormalOrderRepository normalOrderRepository){
        this.normalOrderRepository = normalOrderRepository;
    }

    @GetMapping("/list")
    public Iterable<NormalOrder> getNormalOrders(){
        return normalOrderRepository.findAll();
    }

    @PostMapping("/save")
    public Iterable<NormalOrder> saveNormalOrders(@RequestBody List<NormalOrder> normalOrders){
        return normalOrderRepository.saveAll(normalOrders);
    }

    @PostMapping("/{Id}/{Name}")
    @ResponseBody
    public void changeStatus(@PathVariable Long Id, @PathVariable String Name, @RequestBody String status){
        NormalOrder normalOrder = normalOrderRepository.findByIdAndName(Id, Name);
        if(!normalOrder.getStatus().equals(status)) normalOrder.setStatus(status);
        normalOrderRepository.save(normalOrder);
    }
}
