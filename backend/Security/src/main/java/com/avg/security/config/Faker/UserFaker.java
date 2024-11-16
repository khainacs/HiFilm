package com.avg.security.config.Faker;

import com.avg.security.entities.User;
import com.avg.security.repository.UserRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/*
@Author: khainacs
*/
@Component
public class UserFaker implements CommandLineRunner {
    private final Faker faker;
    private final UserRepository userRepository;

    public UserFaker(UserRepository userRepository){
        this.userRepository = userRepository;
        this.faker = new Faker();
    }
    @Override
    public void run(String... args) throws Exception {
        if(userRepository.findAll().isEmpty()){
            List<User> users = new ArrayList<>();
            for (int i = 0; i < 4; i++){
                User user = User.builder().email(faker.internet().emailAddress())
                                            .password(faker.internet().password())
                                            .name(faker.name().fullName())
                                            .build();
                users.add(user);
            }
            userRepository.saveAllAndFlush(users);
        }
    }
}
