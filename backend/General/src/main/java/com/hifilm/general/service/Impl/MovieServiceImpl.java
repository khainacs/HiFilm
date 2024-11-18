package com.hifilm.general.service.Impl;

import com.hifilm.general.dto.MovieDTO;
import com.hifilm.general.mapper.CategoryMapper;
import com.hifilm.general.mapper.MovieMapper;
import com.hifilm.general.repository.MovieRepository;
import com.hifilm.general.service.MovieService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MovieServiceImpl extends AbstractBaseServiceImpl<MovieDTO> implements MovieService {
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private MovieMapper movieMapper;

    @Override
    public void setRepository() {
       setRepository(movieRepository);
    }

    public MovieServiceImpl(){
        super.setMapper(new MovieMapper());
    }
}
