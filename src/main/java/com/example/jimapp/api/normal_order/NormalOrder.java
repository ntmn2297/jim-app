package com.example.jimapp.api.normal_order;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class NormalOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String carts;

    private Double price;

    private String status;

    private String address;

    private String phone;

    private String name;

    public NormalOrder() {
    }

    public NormalOrder(String carts, Double price, String status, String address, String phone, String name) {
        this.carts = carts;
        this.price = price;
        this.status = status;
        this.address = address;
        this.phone = phone;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCarts() {
        return carts;
    }

    public void setCarts(String carts) {
        this.carts = carts;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "NormalOrder{" +
                "id=" + id +
                ", carts='" + carts + '\'' +
                ", price=" + price +
                ", status='" + status + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
