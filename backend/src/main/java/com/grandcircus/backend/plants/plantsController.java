package com.grandcircus.backend.plants;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:8080/plants")
@RestController
public class plantsController {

	@Autowired
	private plantsRepository repo;
	
	
	@GetMapping("/plants")
	public List<Plants> getPlants(){
		return repo.findAll();
	}
	
	
	// C(R)UD -- Read One
		@GetMapping("/plants/{id}")
		public Plants readOne(@PathVariable("id") Long id) {
			return repo.findById(id).orElseThrow(() -> new PlantsNotFoundException(id) );
		}
		
		
	// (C)RUD -- Create
		@PostMapping("/plants")
		@ResponseStatus(HttpStatus.CREATED)
		public Plants create(@RequestBody Plants avchar) {
			repo.save(avchar);
			return avchar;
		}
	
	// CRU(D) -- Delete
		@DeleteMapping("/plants/{id}")
		@ResponseStatus(HttpStatus.NO_CONTENT)
		public void delete(@PathVariable("id") Long id) {
			repo.deleteById(id);
		}
	
}
