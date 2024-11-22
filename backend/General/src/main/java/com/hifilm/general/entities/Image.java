package com.hifilm.general.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@FieldDefaults(level = AccessLevel.PRIVATE)
@Table(name = "Image")
public class Image extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    long id;

    @NotBlank(message = "Name cannot blank")
    @Size(max = 255, message = "Name must be at most 255 character")
    @Column(name = "name")
    String name;

    @NotBlank(message = "Path cannot be blank")
    @Size(max = 500, message = "Path must be at most 500 character")
    @Column(name = "path", length = 500)
    String path;

    @Size(max = 255, message = "Alt text must be at most 255 characters")
    @Column(name = "alt")
    String alt;

    @OneToOne(mappedBy = "image")
    ImageDetail imageDetail;

}
