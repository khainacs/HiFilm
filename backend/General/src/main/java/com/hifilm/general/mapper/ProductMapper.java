package com.hifilm.general.mapper;

import com.hifilm.general.dto.ProductDTO;
import com.hifilm.general.entities.Product;
import org.springframework.stereotype.Service;

@Service
public class ProductMapper extends AbstractMapper<Product, ProductDTO> {
    public ProductMapper(){
        super(Product.class, ProductDTO.class);
    }
}
