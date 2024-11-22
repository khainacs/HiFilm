package com.hifilm.general.controller;

import com.hifilm.general.consts.ApiPath;
import com.hifilm.general.dto.ImageDTO;
import com.hifilm.general.response.ImageResponseDTO;
import com.hifilm.general.service.Impl.ImageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ImageController {
    @Autowired
    private ImageServiceImpl imageService;

    @GetMapping(ApiPath.RETRIEVE_ID_IMAGE)
    public ResponseEntity<?> getImageByID(@PathVariable Long id){
        ImageResponseDTO response = new ImageResponseDTO();
        try{
            if(id == null){
                response.setMessage("Get Image By ID Failed, ID is required!!!");
                response.setErrorCode(400);
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(imageService.getByID(id));
            response.setMessage("Get Image By ID Successfully!!!");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get Image By ID Failed, "+ e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @GetMapping(ApiPath.RETRIEVE_ALL_IMAGE)
    public ResponseEntity<?> getAllImage(){
        ImageResponseDTO response = new ImageResponseDTO();
        try{
            response.setList(imageService.getAll());
            response.setErrorCode(200);
            response.setMessage("Get All Image Successfully!!!");
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get All Image Failed, "+ e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @PostMapping(ApiPath.CREATE_IMAGE)
    public ResponseEntity<?> createImage(@RequestBody ImageDTO imageDTO) {
        ImageResponseDTO response = new ImageResponseDTO();
        try{
            if(imageDTO == null || imageDTO.getName().isEmpty()
                        || imageDTO.getPath().isEmpty()){
                response.setErrorCode(400);
                response.setMessage("Create Image Failed, Name or Path is require!!!");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(imageService.create(imageDTO));
            response.setMessage("Create Image Successfully!!");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Create Image Failed, "+ e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @PostMapping(ApiPath.UPDATE_IMAGE)
    public ResponseEntity<?> updateImage(@RequestBody ImageDTO imageDTO){
        ImageResponseDTO response = new ImageResponseDTO();
        try{
            if(imageDTO == null || imageDTO.getId().isEmpty()
                                || imageDTO.getPath().isEmpty() || imageDTO.getName().isEmpty()){
                response.setMessage("Update Image Failed, Path, Name or ID is required!!!");
                response.setErrorCode(400);
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(imageService.update(imageDTO));
            response.setMessage("Update Image Successfully!!!");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Update Image Failed, "+ e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @DeleteMapping(ApiPath.DELETE_IMAGE)
    public ResponseEntity<?> deleteImageByID(@PathVariable Long id){
        ImageResponseDTO response = new ImageResponseDTO();
        try{
            if(id != null && imageService.delete(id)){
               response.setErrorCode(200);
               response.setMessage("Delete Image Successfully");
               return new ResponseEntity<>(response, HttpStatus.OK);
            }
            response.setMessage("Delete Image Failed, ID is required!!!");
            response.setErrorCode(400);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Delete Image Failed, "+ e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
}

