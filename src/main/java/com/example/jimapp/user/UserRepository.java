package com.example.jimapp.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public Iterable<User> findByLoginNameAndPassWord(String loginName, String password);
}
