package com.hifilm.general.controller;

import com.hifilm.general.consts.ApiPath;
import com.hifilm.general.dto.MovieDTO;
import com.hifilm.general.response.MovieResponseDTO;
import com.hifilm.general.service.Impl.MovieServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class MovieController {
    @Autowired
    private MovieServiceImpl movieService;

    @GetMapping(ApiPath.RETRIEVE_ALL_MOVIE)
    public ResponseEntity<?> getAllMovie(){
        MovieResponseDTO response = new MovieResponseDTO();
        try{
            response.setList(movieService.getAll());
            response.setMessage("Get All Movie Successfully");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get All Movie Failed" + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @GetMapping(ApiPath.RETRIEVE_ID_MOVIE)
    public ResponseEntity<?> getMovieByID(@PathVariable Long id){
        MovieResponseDTO response = new MovieResponseDTO();
        try{
            if(id == null){
                response.setErrorCode(400);
                response.setMessage("Get Movie By ID Failed, ID is required!!");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(movieService.getByID(id));
            response.setMessage("Get Movie By ID!!!");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get Movie By ID Failed" + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @PostMapping(ApiPath.CREATE_MOVIE)
    public ResponseEntity<?> createMovie(@RequestBody MovieDTO movieDTO){
        MovieResponseDTO response = new MovieResponseDTO();
        try{
            if (movieDTO == null || movieDTO.getPath().isEmpty() || movieDTO.getProduct_detail_id() == 0){
                response.setErrorCode(400);
                response.setMessage("Create Movie Failed, Product ID and Path is required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(movieService.create(movieDTO));
            response.setMessage("Create Movie Successfully");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Create Movie Failed" + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @PostMapping(ApiPath.UPDATE_MOVIE)
    public ResponseEntity<?>  updateMovie(@RequestBody MovieDTO movieDTO){
        MovieResponseDTO response = new MovieResponseDTO();
        try{
            if (movieDTO == null || movieDTO.getPath().isEmpty() || movieDTO.getProduct_detail_id() == 0){
                response.setErrorCode(400);
                response.setMessage("Create Movie Failed, Product ID and Path is required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setErrorCode(200);
            response.setMessage("Update Movie Successfully!!!");
            response.setData(movieService.update(movieDTO));
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Update Movie Failed" + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @DeleteMapping(ApiPath.DELETE_MOVIE)
    public ResponseEntity<?> deleteMovieByID(@PathVariable Long id){
        MovieResponseDTO response = new MovieResponseDTO();
        try{
            if(id != null && movieService.delete(id)){
                response.setErrorCode(200);
                response.setMessage("Delete Movie Successfully");
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
            response.setMessage("Delete Movie Failed, ID is required!!!");
            response.setErrorCode(400);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Delete Movie Failed" + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
}
