package com.grandcircus.backend.notes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="notes")
public class Notes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private String body;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	
	public Notes() {
		super();
	}
	
	public Notes(String title, String body) {
		super();
		this.title = title;
		this.body = body;
	}
	
	public Notes(Long id, String title, String body) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
	}

	
	
	
	
	
}
