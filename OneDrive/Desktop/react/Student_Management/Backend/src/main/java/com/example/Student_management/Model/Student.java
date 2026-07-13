package com.example.Student_management.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private int tamil;
    private int english;
    private int maths;
    private int science;
    private int social;
    private int total;
    private int average;
    
    @PrePersist
    @PreUpdate
    public void calculateMarks() {

        total = tamil + english + maths + science + social;

        average = total / 5;
    }
    
    
}