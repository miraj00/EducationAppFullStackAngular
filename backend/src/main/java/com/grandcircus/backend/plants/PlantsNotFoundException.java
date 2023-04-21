package com.grandcircus.backend.plants;

public class PlantsNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	
	public PlantsNotFoundException(Long id) {
	super("Could not find PLANT with id " + id);
	
	}
}