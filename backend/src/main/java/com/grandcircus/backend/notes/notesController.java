package com.grandcircus.backend.notes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:8080/notes")
@RestController
public class notesController {
	
	@Autowired
	private notesRepository repo;
	
	
	@GetMapping("/notes")
	public List<Notes> getBookmarks(){
		return repo.findAll();
	}
	
	
	// C(R)UD -- Read One
	@GetMapping("/notes/{id}")
	public Notes readOne(@PathVariable("id") Long id) {
		return repo.findById(id).orElseThrow(() -> new NotesNotFoundException(id) );
	}
	
	
	
	// (C)RUD -- Create
	@PostMapping("/notes")
	@ResponseStatus(HttpStatus.CREATED)
	public Notes create(@RequestBody Notes avchar) {
		repo.save(avchar);
		return avchar;
	}
	
	
	@PutMapping("/notes/{id}")
	 public String editNotes(@PathVariable long id,@RequestBody Notes newNotes) {
	 Notes editNotes = repo.findById(id).get();
	 editNotes.setTitle(newNotes.getTitle());
	 editNotes.setBody(newNotes.getBody());
	 repo.save(editNotes);
	 return "Notes with ID : " + id +" updated";
	 }
	
	
	
	// CRU(D) -- Delete
	@DeleteMapping("/notes/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	

}
