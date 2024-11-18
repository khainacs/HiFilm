package com.hifilm.general.service.Impl;

import com.hifilm.general.dto.ProductDTO;
import com.hifilm.general.mapper.ProductMapper;
import com.hifilm.general.repository.ProductRepository;
import com.hifilm.general.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ProductServiceImpl extends AbstractBaseServiceImpl<ProductDTO> implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductMapper productMapper;


    @Override
    public void setRepository() {
        AbstractBaseServiceImpl.setRepository(productRepository);
    }

    public ProductServiceImpl(){
        super.setMapper(new ProductMapper());
    }
}
