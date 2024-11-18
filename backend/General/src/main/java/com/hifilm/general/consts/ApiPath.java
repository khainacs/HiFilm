package com.hifilm.general.consts;

public interface ApiPath {
    /**
     * Swagger URL
     * ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
     * http://localhost:9003/swagger-ui/index.html#/
     * */

    String API = "/api/v1";
    //http://localhost:9003/api/v1

    //Product
    String BASE_PRODUCT_API = API + "/product";
    String CREATE_PRODUCT = BASE_PRODUCT_API + "/create";
    String UPDATE_PRODUCT = BASE_PRODUCT_API + "update";
    String RETRIEVE_ALL_PRODUCT = BASE_PRODUCT_API + "/retrieve";
    String RETRIEVE_ID_PRODUCT = BASE_PRODUCT_API + "/retrieveID";
    String DELETE_PRODUCT = BASE_PRODUCT_API + "/delete";
    //Category
    String BASE_CATEGORY_API = API + "/category";
    String CREATE_CATEGORY = BASE_CATEGORY_API + "/create";
    String UPDATE_CATEGORY = BASE_CATEGORY_API + "/update";
    String RETRIEVE_ALL_CATEGORY = BASE_CATEGORY_API + "/retrieve";
    String RETRIEVE_ID_CATEGORY = BASE_CATEGORY_API + "/retrieveID";
    String DELETE_CATEGORY = BASE_CATEGORY_API + "/delete";
    //Movie
    String BASE_MOVIE_API = API + "/movie";
    String CREATE_MOVIE = BASE_MOVIE_API + "/create";
    String UPDATE_MOVIE = BASE_MOVIE_API + "/update";
    String RETRIEVE_ALL_MOVIE = BASE_MOVIE_API + "/retrieve";
    String RETRIEVE_ID_MOVIE = BASE_MOVIE_API + "/retrieveID";
    String DELETE_MOVIE = BASE_MOVIE_API + "/delete";
    //Image
    String BASE_IMAGE_API = API + "/image";
    String CREATE_IMAGE = BASE_IMAGE_API + "/create";
    String UPDATE_IMAGE = BASE_IMAGE_API + "/update";
    String RETRIEVE_ALL_IMAGE = BASE_IMAGE_API + "/retrieve";
    String RETRIEVE_ID_IMAGE = BASE_IMAGE_API + "/retrieveID";
    String DELETE_IMAGE = BASE_IMAGE_API + "/delete";
    //About
    String BASE_ABOUT_API = API + "/about";
    String CREATE_ABOUT = BASE_ABOUT_API + "/create";
    String UPDATE_ABOUT = BASE_ABOUT_API + "/update";
    String RETRIEVE_ABOUT = BASE_ABOUT_API + "/retrieve";
    String DELETE_ABOUT = BASE_ABOUT_API + "/delete";

    //Product detail
    String BASE_PRODUCT_DETAIL_API = API + "/product_detail";
    String CREATE_PRODUCT_DETAIL_API = BASE_PRODUCT_DETAIL_API + "/create";
    String UPDATE_PRODUCT_DETAIL = BASE_PRODUCT_DETAIL_API + "/update";
    String RETRIEVE_ALL_PRODUCT_DETAIL = BASE_PRODUCT_DETAIL_API + "/retrieve";
    String RETRIEVE_ID_PRODUCT_DETAIL = BASE_PRODUCT_DETAIL_API + "/retrieveID";
    String DELETE_PRODUCT_DETAIL = BASE_PRODUCT_DETAIL_API + "/delete";
}
