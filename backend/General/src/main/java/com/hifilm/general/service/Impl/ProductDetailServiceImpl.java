package com.hifilm.general.service.Impl;

import com.hifilm.general.dto.ProductDetailDTO;
import com.hifilm.general.mapper.ProductDetailMapper;
import com.hifilm.general.service.ProductDetailService;
import com.hifilm.general.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;

public class ProductDetailServiceImpl extends AbstractBaseServiceImpl<ProductDetailDTO> implements ProductService {
    @Autowired
    private ProductDetailService productDetailService;

    @Override
    public void setRepository() {
        AbstractBaseServiceImpl.setRepository(productDetailService);
    }

    public ProductDetailServiceImpl(){
        super.setMapper(new ProductDetailMapper());
    }
}
