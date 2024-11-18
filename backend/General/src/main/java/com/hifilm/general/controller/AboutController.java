package com.hifilm.general.controller;

import com.hifilm.general.consts.ApiPath;
import com.hifilm.general.dto.AboutDTO;
import com.hifilm.general.entities.About;
import com.hifilm.general.response.ResponseDTO;
import com.hifilm.general.service.AboutService;
import com.hifilm.general.service.Impl.AboutServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author khainacs
 */
@RestController
public class AboutController {
    @Autowired
    private AboutServiceImpl aboutService;

    @GetMapping(ApiPath.RETRIEVE_ABOUT)
    public ResponseDTO<Object> getAbout(){
        ResponseDTO response = new ResponseDTO();
        AboutDTO about = aboutService.getAll().stream().findFirst().orElse(new AboutDTO());
        if(about == null){
            response.setErrorCode(403);
            response.setMessage("About not found");
            return response;
        }
        response.setMessage("Get about successfully!!!");
        response.setErrorCode(200);
        return response;
    }


}
