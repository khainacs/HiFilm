package com.hifilm.general.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.io.Serializable;

@Data
@Embeddable
public class ImageDetailPK implements Serializable {
    @Column(name = "imageId")
    private long imageId;

    @Column(name = "productId")
    private long productId;
}
