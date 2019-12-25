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


    @PostMapping("/update/{Id}/{Name}")
    @ResponseBody
    public User update(@PathVariable Long Id, @PathVariable String Name, @RequestBody User newUser){
        User user = userRepository.findByIdAndName(Id, Name);
        if(newUser.getName() != null) user.setName(newUser.getName());
        if(newUser.getPhone() != null) user.setPhone(newUser.getPhone());
        if(newUser.getEmail() != null) user.setEmail(newUser.getEmail());
        if(newUser.getPassWord() != null) user.setPassWord(Base64.getUrlEncoder().encodeToString(newUser.getPassWord().getBytes()));
        if(newUser.getLevel() != null) user.setLevel(newUser.getLevel());
        if(newUser.getGender() != null) user.setGender(newUser.getGender());
        if(newUser.getAddress() != null) user.setAddress(newUser.getAddress());
        this.saveUser(user);
        return user;
    }

    @PostMapping("/check-login-name/{loginName}")
    @ResponseBody
    public boolean checkLoginName(@PathVariable String loginName){
        return userRepository.existsByLoginName(loginName);
    }

    @PostMapping("/check-email/{email}")
    @ResponseBody
    public boolean checkEmail(@PathVariable String email){
        return userRepository.existsByEmail(email);
    }

}
