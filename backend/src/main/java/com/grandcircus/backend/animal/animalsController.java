package com.grandcircus.backend.animal;

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


@CrossOrigin(origins = "http://localhost:8080/animals")
@RestController
public class animalsController {

	@Autowired
	private animalsRepository repo;
	
	
	@GetMapping("/animals")
	public List<Animals> getAnimals(){
		return repo.findAll();
	}
	
	
	// C(R)UD -- Read One
		@GetMapping("/animals/{id}")
		public Animals readOne(@PathVariable("id") Long id) {
			return repo.findById(id).orElseThrow(() -> new AnimalsNotFoundException(id) );
		}
		
		
		
		// (C)RUD -- Create
		@PostMapping("/animals")
		@ResponseStatus(HttpStatus.CREATED)
		public Animals create(@RequestBody Animals avchar) {
			repo.save(avchar);
			return avchar;
		}
	
		// CRU(D) -- Delete
		@DeleteMapping("/animals/{id}")
		@ResponseStatus(HttpStatus.NO_CONTENT)
		public void delete(@PathVariable("id") Long id) {
			repo.deleteById(id);
		}
	
}
