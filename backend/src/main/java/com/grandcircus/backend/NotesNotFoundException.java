package com.grandcircus.backend;
public class NotesNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public NotesNotFoundException(Long id) {
		super("Could not find book with id " + id);
	}
}