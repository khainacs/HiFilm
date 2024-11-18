package com.hifilm.general.controller;

import com.hifilm.general.consts.ApiPath;
import com.hifilm.general.dto.CategoryDTO;
import com.hifilm.general.response.CategoryResponseDTO;
import com.hifilm.general.response.ResponseDTO;
import com.hifilm.general.service.Impl.CategoryServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/**
 * @author khainacs
 */
@RestController
public class CategoryController {
    @Autowired
    private CategoryServiceImpl categoryService;

    @PostMapping(ApiPath.CREATE_CATEGORY)
    public ResponseEntity<?> createCategory(@RequestBody CategoryDTO categoryDTO){
        CategoryResponseDTO response = new CategoryResponseDTO();
        try{
            if (categoryDTO == null || categoryDTO.getName().isEmpty()){
                response.setErrorCode(400);
                response.setMessage("Create Category Failed because request body null or name is null");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            categoryService.create(categoryDTO);
            response.setMessage("Create Category Successfully");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Create Category Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }

    @GetMapping(ApiPath.RETRIEVE_ALL_CATEGORY)
    public ResponseEntity<?> getAllCategory(){
        CategoryResponseDTO response = new CategoryResponseDTO();
        try{
            response.setList(categoryService.getAll());
            response.setErrorCode(200);
            response.setMessage("Get All Category Successfully!!!");
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setMessage("Get ALL Category Failed, " + e.getMessage());
            response.setErrorCode(500);
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }

    @GetMapping(ApiPath.RETRIEVE_ID_CATEGORY)
    public ResponseEntity<?> getCategoryById(@PathVariable("id") String id){
        CategoryResponseDTO response = new CategoryResponseDTO();
        try{
            CategoryDTO category = categoryService.getByID(id);
            if(category == null){
                response.setErrorCode(404);
                response.setMessage("Not Found Category By Id ");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }
            response.setMessage("Get Category By Id");
            response.setErrorCode(200);
            response.setData(category);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get Category By Id Fail, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }

    @DeleteMapping(ApiPath.DELETE_CATEGORY)
    public ResponseEntity<?> deleteCategoryById(@PathVariable("id") String id){
        CategoryResponseDTO response = new CategoryResponseDTO();
        try{
            if(id.isEmpty() || id == null) {
                response.setMessage("Id is null, empty");
                response.setErrorCode(400);
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            if (!categoryService.delete(id)){
                response.setErrorCode(404);
                response.setMessage("Not Found This Entity, so that Delete Failed");
            }
            response.setMessage("Delete By Id Successfully!!!");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Delete By ID Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }

    @PostMapping(ApiPath.UPDATE_CATEGORY)
    public ResponseEntity<?> updateCategoryById(@RequestBody CategoryDTO categoryDTO){
        CategoryResponseDTO response = new CategoryResponseDTO();
        try{
            if (categoryDTO == null){
                response.setMessage("Parameter is null");
                response.setErrorCode(400);
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            categoryService.update(categoryDTO);
            response.setErrorCode(200);
            response.setMessage("Update Category By ID Successfully!!!");
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setMessage("Update By ID Failed, " + e.getMessage());
            response.setErrorCode(500);
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }

    }
}
