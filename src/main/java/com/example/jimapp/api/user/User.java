package com.example.jimapp.api.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;

    private String name;

    private String loginName;

    private  String phone;

    private String email;

    private String passWord;

    private String gender;

    private Date dateOfBirth;

    private String level;

    private String token;

    private String address;

    public User() {
    }

    public User(String name, String loginName, String phone, String email, String passWord, String gender, Date dateOfBirth, String level, String token, String address) {
        this.name = name;
        this.loginName = loginName;
        this.phone = phone;
        this.email = email;
        this.passWord = passWord;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.level = level;
        this.token = token;
        this.address = address;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", loginName='" + loginName + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", passWord='" + passWord + '\'' +
                ", gender='" + gender + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", level='" + level + '\'' +
                ", token='" + token + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
