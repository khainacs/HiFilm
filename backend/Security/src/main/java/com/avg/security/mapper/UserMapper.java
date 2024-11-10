package com.avg.security.mapper;

import com.avg.security.dto.UserDTO;
import com.avg.security.entities.User;
import org.springframework.stereotype.Service;

@Service
public class UserMapper extends AbstractMapper<User, UserDTO>{
    public UserMapper(){
        super(User.class, UserDTO.class);
    }
}
