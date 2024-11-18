package com.hifilm.general.mapper;

import com.hifilm.general.dto.MovieDTO;
import com.hifilm.general.entities.Movie;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class MovieMapper extends AbstractMapper<Movie, MovieDTO> {
    public MovieMapper(){
        super(Movie.class, MovieDTO.class);
    }
}
