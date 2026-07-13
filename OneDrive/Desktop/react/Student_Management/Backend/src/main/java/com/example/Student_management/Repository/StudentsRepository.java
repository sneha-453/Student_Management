package com.example.Student_management.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Student_management.Model.Student;

public interface StudentsRepository extends JpaRepository<Student, Long> {

	
}