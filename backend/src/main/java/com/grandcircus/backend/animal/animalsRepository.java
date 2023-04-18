package com.grandcircus.backend.animal;

import org.springframework.data.jpa.repository.JpaRepository;


public interface animalsRepository extends JpaRepository <Animals, Long>  {

}
