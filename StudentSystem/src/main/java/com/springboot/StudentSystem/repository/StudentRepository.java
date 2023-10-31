package com.springboot.StudentSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.springboot.StudentSystem.model.Student;
@EnableJpaRepositories
@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>
{

}
