package com.avg.security.service.impl;

import com.avg.security.dto.UserDTO;
import com.avg.security.mapper.UserMapper;
import com.avg.security.repository.RoleRepository;
import com.avg.security.repository.UserRepository;
import com.avg.security.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserServiceImpl extends AbstractBaseServiceImpl<UserDTO> implements UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserMapper userMapper;

    @Autowired
    JwtService jwtService;

    @Override
    public void setRepository() {
        AbstractBaseServiceImpl.setRepository(userRepository);
    }
    public UserServiceImpl(){
        super.setMapper(new UserMapper());
    }
}
