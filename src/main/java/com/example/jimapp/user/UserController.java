package com.example.jimapp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private UserRepository userRepository;

    @Autowired
    public UserController (UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/list")
    public Iterable<User> getUsers (){
        return userRepository.findAll();
    }

    @PostMapping("/save")
    public Iterable<User> saveUser(@RequestBody List<User> users){
        return userRepository.saveAll(users);
    }

    @GetMapping("/{loginName}&{password}")
    public Iterable<User> findByLoginName(@PathVariable String loginName, @PathVariable String password){
        return userRepository.findByLoginNameAndPassWord(loginName, password);
    }
}
