package com.example.jimapp.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.Date;

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
    public User saveUser(@RequestBody User user){
        if(user.getToken() == null){
            user.setPassWord(Base64.getUrlEncoder().encodeToString(user.getPassWord().getBytes()));
        }
        return userRepository.save(user);
    }

    @PostMapping("/login/{loginName}/{password}")
    @ResponseBody
    public User login(@PathVariable String loginName, @PathVariable String password){
        password = Base64.getUrlEncoder().encodeToString(password.getBytes());
        User user = userRepository.findByLoginNameAndPassWord(loginName, password);
        Date date = new Date();
        String str = user.getName() + ":" + date + ":" + user.getLevel();
        String token = Base64.getUrlEncoder().encodeToString(str.getBytes());
        user.setToken(token);
        this.saveUser(user);
        return user;
    }
}
