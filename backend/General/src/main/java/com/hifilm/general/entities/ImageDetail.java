package com.hifilm.general.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ImageDetail {
    @EmbeddedId
    ImageDetailPK id;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @MapsId("productId")
    @JoinColumn(name = "productId")
    Product product;

    @OneToOne(fetch = FetchType.LAZY, optional = true)
    @MapsId("imageId")
    @JoinColumn(name = "imageId")
    Image image;
}
