package com.grandcircus.backend.animal;


public class AnimalsNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public AnimalsNotFoundException(Long id) {
		super("Could not find ANIMAL with id " + id);
	}
	
	
}
