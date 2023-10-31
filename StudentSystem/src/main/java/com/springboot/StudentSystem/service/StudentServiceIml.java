package com.springboot.StudentSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.StudentSystem.model.Student;
import com.springboot.StudentSystem.repository.StudentRepository;

@Service
public class StudentServiceIml implements StudentService
{
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student saveStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepository.save(student);
	}

	@Override
	public List<Student> getAllStudents() {
		
		return studentRepository.findAll() ;
	}
	
	
	

}
