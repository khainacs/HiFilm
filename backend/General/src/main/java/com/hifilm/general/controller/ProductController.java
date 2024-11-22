package com.hifilm.general.controller;

import com.hifilm.general.consts.ApiPath;
import com.hifilm.general.dto.ProductDTO;
import com.hifilm.general.entities.Product;
import com.hifilm.general.response.ProductResponseDTO;
import com.hifilm.general.service.Impl.ProductServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class ProductController {
    @Autowired
    private ProductServiceImpl productService;

    @GetMapping(ApiPath.RETRIEVE_ALL_PRODUCT)
    public ResponseEntity<?> getAll(){
        ProductResponseDTO response = new ProductResponseDTO();
        try{
            response.setList(productService.getAll());
            response.setMessage("Get All Product Successfully");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get All Product Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @GetMapping(ApiPath.RETRIEVE_ID_PRODUCT)
    public ResponseEntity<?> getProductByID(@PathVariable Long id){
        ProductResponseDTO response = new ProductResponseDTO();
        try{
            if(id == null){
                response.setErrorCode(400);
                response.setMessage("Get Product By ID Failed, ID is required!!");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(productService.getByID(id));
            response.setMessage("Get Product By ID Successfully!!!");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get Product By ID Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @PostMapping(ApiPath.CREATE_PRODUCT)
    public ResponseEntity<?> createProduct(@RequestBody ProductDTO productDTO){
        ProductResponseDTO response = new ProductResponseDTO();
        try{
            if (productDTO == null || productDTO.getTitle().isEmpty()
                    || productDTO.getProduct_detail_id() == 0 || productDTO.getCategory_id() == 0){
                response.setErrorCode(400);
                response.setMessage("Create Product Failed, Product Detail ID and Category ID is required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(productService.create(productDTO));
            response.setMessage("Create Product Successfully");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Create Product Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @PostMapping(ApiPath.UPDATE_PRODUCT)
    public ResponseEntity<?> updateProduct(@PathVariable ProductDTO productDTO){
        ProductResponseDTO response = new ProductResponseDTO();
        try{
            if (productDTO == null || productDTO.getTitle().isEmpty()
                    || productDTO.getProduct_detail_id() == 0 || productDTO.getCategory_id() == 0){
                response.setErrorCode(400);
                response.setMessage("Update Product Failed, Product Tile," +
                                            " Product Detail ID and Category ID is required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setErrorCode(200);
            response.setMessage("Update Product Successfully!!!");
            response.setData(productService.update(productDTO));
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Update Product Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @DeleteMapping(ApiPath.DELETE_PRODUCT)
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        ProductResponseDTO response = new ProductResponseDTO();
        try{
            if(id != null && productService.delete(id)){
                response.setErrorCode(200);
                response.setMessage("Delete Product Successfully");
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
            response.setMessage("Delete Product Failed, ID is required!!!");
            response.setErrorCode(400);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Delete Product Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
}
