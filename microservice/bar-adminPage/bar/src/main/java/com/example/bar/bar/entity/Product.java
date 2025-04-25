package com.example.bar.bar.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.math.BigDecimal;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


//    @Pattern(regexp = "^[^0-9]+$", message = "Tên không được chứa chữ số")
    @NotBlank(message = "Tên không được để trống")
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d).+$", message = "Tên phải chứa cả chữ và số")
    private String name;

    @NotBlank(message = "Mô tả không được để trống")
    @Column(columnDefinition = "TEXT")
    private String description;

    @NotNull(message = "Giá không được để trống")
    @Column(precision = 10, scale = 2)
    private BigDecimal price;

    @NotBlank(message = "Chi tiết không được để trống")
    @Column(columnDefinition = "TEXT")
    private String details;

    @NotBlank(message = "Thông tin thêm không được để trống")
    @Column(name = "more_about", columnDefinition = "TEXT")
    private String moreAbout;

    @NotBlank(message = "Hình ảnh không được để trống")
    private String image;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }
    public String getMoreAbout() { return moreAbout; }
    public void setMoreAbout(String moreAbout) { this.moreAbout = moreAbout; }
    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}
