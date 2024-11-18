package com.hifilm.general.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "product_detail")
public class ProductDetail extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_detail_id")
    long id;

    @Column(name = "title")
    String title;

    @Column(name = "description")
    String description;

    @Column(name = "rating")
    Integer rating;

    @OneToOne(cascade = CascadeType.ALL)
    Product product;

    @OneToMany(mappedBy = "productDetail", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    List<Image> images;

    @OneToOne(mappedBy = "productDetail")
    @JoinColumn(name = "movie_id", referencedColumnName = "id")
    Movie movie;
}
