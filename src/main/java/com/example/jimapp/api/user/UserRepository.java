package com.example.jimapp.api.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByLoginNameAndPassWord(String loginName, String password);
    public User findByIdAndName(Long Id, String Name);
}
