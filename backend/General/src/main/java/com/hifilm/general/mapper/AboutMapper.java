package com.hifilm.general.mapper;

import com.hifilm.general.dto.AboutDTO;
import com.hifilm.general.entities.About;
import org.springframework.stereotype.Service;

@Service
public class AboutMapper extends AbstractMapper<About, AboutDTO> {
    public AboutMapper(){
        super(About.class, AboutDTO.class);
    }
}
