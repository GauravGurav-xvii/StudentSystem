package com.springboot.StudentSystem.service;

import java.util.List;

import com.springboot.StudentSystem.model.Student;

public interface StudentService {
	
	public Student saveStudent(Student student);
	public List<Student> getAllStudents();

}
