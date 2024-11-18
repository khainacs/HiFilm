package com.hifilm.general.service.Impl;

import com.hifilm.general.dto.AboutDTO;
import com.hifilm.general.mapper.AboutMapper;
import com.hifilm.general.repository.AboutRepository;
import com.hifilm.general.service.AboutService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AboutServiceImpl extends AbstractBaseServiceImpl<AboutDTO> implements AboutService {
    @Autowired
    private AboutRepository aboutRepository;

    @Autowired
    private AboutMapper aboutMapper;


    @Override
    public void setRepository() {
        AbstractBaseServiceImpl.setRepository(aboutRepository);
    }

    public AboutServiceImpl(){
        super.setMapper(new AboutMapper());
    }
}
