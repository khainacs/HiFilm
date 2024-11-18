package com.hifilm.general.mapper;

import com.hifilm.general.dto.CategoryDTO;
import com.hifilm.general.entities.Category;
import org.springframework.stereotype.Service;

@Service
public class CategoryMapper extends AbstractMapper<Category, CategoryDTO> {
    public CategoryMapper(){
        super(Category.class, CategoryDTO.class);
    }
}
