package com.example.Student_management.Controller;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.Student_management.Model.Student;
import com.example.Student_management.Repository.StudentsRepository;


@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class StudentsController {
@Autowired
private StudentsRepository sRepo;
@GetMapping("/students")
public ResponseEntity<?> getAllStudents() {
    try {
        List<Student> students = sRepo.findAll();
        return new ResponseEntity<>(students, HttpStatus.OK);
    } catch (Exception e) {
        return new ResponseEntity<>("Error fetching employees: " + e.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
@GetMapping("/students/{id}")
public ResponseEntity<?> getStudentById(@PathVariable Long id) {
    try {
        Optional<Student> student = sRepo.findById(id);

        if (student.isPresent()) {
            return new ResponseEntity<>(student.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);
        }

    } catch (Exception e) {
        return new ResponseEntity<>("Error fetching student: " + e.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
@PostMapping("/students")
public ResponseEntity<?> saveStudents(@RequestBody Student student) {
    try {

        Student savedStudent = sRepo.save(student);

        return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);

    } catch (Exception e) {

        return new ResponseEntity<>(
                "Error saving student: " + e.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
@PutMapping("/students")
public ResponseEntity<?> updateStudent(@RequestBody Student student) {

    try {

        Optional<Student> existingStudent = sRepo.findById(student.getId());

        if (existingStudent.isPresent()) {

            Student updatedStudent = sRepo.save(student);

            return new ResponseEntity<>(updatedStudent, HttpStatus.OK);

        } else {

            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);

        }

    } catch (Exception e) {

        return new ResponseEntity<>("Error updating student: " + e.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR);

    }
}
@DeleteMapping("/students/{id}")
public ResponseEntity<?> deleteStudentById(@PathVariable Long id) {
    try {

        Optional<Student> student = sRepo.findById(id);

        if (student.isPresent()) {

            sRepo.deleteById(id);

            return new ResponseEntity<>("Student deleted successfully", HttpStatus.OK);

        } else {

            return new ResponseEntity<>("Student not found", HttpStatus.NOT_FOUND);

        }

    } catch (Exception e) {

        return new ResponseEntity<>("Error deleting student: " + e.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR);

    }
}
@DeleteMapping("/students")
public ResponseEntity<?> deleteAllStudents() {

    try {

        sRepo.deleteAll();

        return new ResponseEntity<>("All students deleted successfully",
                HttpStatus.OK);

    } catch (Exception e) {

        return new ResponseEntity<>("Error deleting students: " + e.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR);

    }

}
}