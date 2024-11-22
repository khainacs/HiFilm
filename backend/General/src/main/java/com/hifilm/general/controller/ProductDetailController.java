package com.hifilm.general.controller;

import com.google.protobuf.Api;
import com.hifilm.general.consts.ApiPath;
import com.hifilm.general.dto.ProductDetailDTO;
import com.hifilm.general.response.ProductDetailResponseDTO;
import com.hifilm.general.response.ProductDetailResponseDTO;
import com.hifilm.general.service.Impl.ProductDetailServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
public class ProductDetailController {
    @Autowired
    private ProductDetailServiceImpl productDetailService;

    @GetMapping(ApiPath.RETRIEVE_ALL_PRODUCT_DETAIL)
    public ResponseEntity<?> getAll(){
        ProductDetailResponseDTO response = new ProductDetailResponseDTO();
        try{
            response.setList(productDetailService.getAll());
            response.setMessage("Get All Product Detail Successfully");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get All Product Detail Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @GetMapping(ApiPath.RETRIEVE_ID_PRODUCT_DETAIL)
    public ResponseEntity<?> getProductByID(@PathVariable Long id){
        ProductDetailResponseDTO response = new ProductDetailResponseDTO();
        try{
            if(id == null){
                response.setErrorCode(400);
                response.setMessage("Get Product Detail By ID Failed, ID is required!!");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(productDetailService.getByID(id));
            response.setMessage("Get Product Detail By ID Successfully!!!");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Get Product Detail By ID Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @PostMapping(ApiPath.CREATE_PRODUCT_DETAIL_API)
    public ResponseEntity<?> createProduct(@RequestBody ProductDetailDTO productDetailDTO){
        ProductDetailResponseDTO response = new ProductDetailResponseDTO();
        try{
            if (productDetailDTO == null || productDetailDTO.getTitle().isEmpty()
                    || productDetailDTO.getProduct_id() == 0 || productDetailDTO.getMovie_id() == 0){
                response.setErrorCode(400);
                response.setMessage("Create Product Detail Failed, Title, Product ID and Movie ID required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setData(productDetailService.create(productDetailDTO));
            response.setMessage("Create Product Detail Successfully");
            response.setErrorCode(200);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Create Product Detail Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
    @PostMapping(ApiPath.UPDATE_PRODUCT_DETAIL)
    public ResponseEntity<?> updateProduct(@RequestBody ProductDetailDTO productDetailDTO){
        ProductDetailResponseDTO response = new ProductDetailResponseDTO();
        try{
            if (productDetailDTO == null || productDetailDTO.getTitle().isEmpty()
                    || productDetailDTO.getProduct_id() == 0 || productDetailDTO.getMovie_id() == 0){
                response.setErrorCode(400);
                response.setMessage("Update Product Detail Failed, Tile," +
                        " Product ID and Movie ID is required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
            response.setErrorCode(200);
            response.setMessage("Update Product Detail Successfully!!!");
            response.setData(productDetailService.update(productDetailDTO));
            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Update Product Detail Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }

    @DeleteMapping(ApiPath.DELETE_PRODUCT_DETAIL)
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        ProductDetailResponseDTO response = new ProductDetailResponseDTO();
        try{
            if(id != null && productDetailService.delete(id)){
                response.setErrorCode(200);
                response.setMessage("Delete Product Detail Successfully");
                return new ResponseEntity<>(response, HttpStatus.OK);
            }
            response.setMessage("Delete Product Detail Failed, ID is required!!!");
            response.setErrorCode(400);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            response.setErrorCode(500);
            response.setMessage("Delete Product Detail Failed, " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_GATEWAY);
        }
    }
}
