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
@Table(name = "product")
public class Product extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @Column(name = "title")
    String title;

    @Column(name = "description")
    String description;

    @Column(name = "rating")
    int rating;

    @OneToOne(mappedBy = "product")
    @JoinColumn(name = "productDetailId", referencedColumnName = "productDetailId")
    ProductDetail productDetail;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "categoryId", referencedColumnName = "id")
    Category category;

    @OneToMany(mappedBy = "product")
    List<ImageDetail> imageDetail;
}
