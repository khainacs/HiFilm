package com.hifilm.general.service.Impl;

import com.hifilm.general.dto.CategoryDTO;
import com.hifilm.general.mapper.CategoryMapper;
import com.hifilm.general.repository.CategoryRepository;
import com.hifilm.general.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CategoryServiceImpl extends AbstractBaseServiceImpl<CategoryDTO> implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public void setRepository() {
        AbstractBaseServiceImpl.setRepository(categoryRepository);
    }

    public CategoryServiceImpl(){
        super.setMapper(new CategoryMapper());
    }
}
