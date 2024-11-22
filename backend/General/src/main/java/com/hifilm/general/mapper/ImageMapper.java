package com.hifilm.general.mapper;

import com.hifilm.general.dto.ImageDTO;
import com.hifilm.general.entities.Image;
import org.springframework.stereotype.Service;

@Service
public class ImageMapper extends AbstractMapper<Image, ImageDTO> {
    public ImageMapper(){
        super(Image.class, ImageDTO.class);
    }
}
