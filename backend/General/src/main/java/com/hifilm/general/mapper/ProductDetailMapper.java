package com.hifilm.general.mapper;

import com.hifilm.general.dto.ProductDetailDTO;
import com.hifilm.general.entities.ProductDetail;
import org.springframework.stereotype.Service;

@Service
public class ProductDetailMapper extends AbstractMapper<ProductDetail, ProductDetailDTO> {
    public ProductDetailMapper(){
        super(ProductDetail.class, ProductDetail.class);
    }
}
