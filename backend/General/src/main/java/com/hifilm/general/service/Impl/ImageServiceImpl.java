package com.hifilm.general.service.Impl;

import com.hifilm.general.dto.ImageDTO;
import com.hifilm.general.mapper.ImageMapper;
import com.hifilm.general.repository.ImageRepository;
import com.hifilm.general.service.ImageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ImageServiceImpl extends AbstractBaseServiceImpl<ImageDTO> implements ImageService {
    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ImageMapper imageMapper;

    @Override
    public void setRepository() {
        AbstractBaseServiceImpl.setRepository(imageRepository);
    }

    public ImageServiceImpl(){
        super.setMapper(new ImageMapper());
    }
}
