package com.avg.security.config.Faker;

import com.avg.security.Enum.RoleName;
import com.avg.security.entities.Role;
import com.avg.security.entities.User;
import com.avg.security.repository.RoleRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


/**
 * @author: khainascs
 * @Param:
 * @Return: fake data for Role table, include USER and ADMIN
 * @Version: 1.0
 * @Since: 10/11/2024
 */
@Component
public class RoleFaker implements CommandLineRunner {
    private final Faker faker;
    private final RoleRepository roleRepository;
    private static final int ADMIN_ROLE_ID = 2;
    public RoleFaker(RoleRepository roleRepository){
        this.roleRepository = roleRepository;
        this.faker = new Faker();
    }

    @Override
    public void run(String... args) throws Exception {
        if (roleRepository.findAll().isEmpty()) {
            List<Role> roles = new ArrayList<>();
            roles.add(createRole(faker.hashCode(), RoleName.USER));
            roles.add(createRole(ADMIN_ROLE_ID, RoleName.ADMIN));
            roleRepository.saveAllAndFlush(roles);
        }
    }

    private Role createRole(int id, RoleName roleName) {
        return Role.builder()
                .id(id)
                .name(roleName.name())
                .name(faker.name().fullName())
                .build();
    }
}
