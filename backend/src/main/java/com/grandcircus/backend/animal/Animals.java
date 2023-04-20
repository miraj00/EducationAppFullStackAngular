package com.grandcircus.backend.animal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="animals")
public class Animals {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String location;
	private String habitat;
	private String lifespan;
	private String biggest_threat;
	private String diet;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getHabitat() {
		return habitat;
	}
	public void setHabitat(String habitat) {
		this.habitat = habitat;
	}
	public String getLifespan() {
		return lifespan;
	}
	public void setLifespan(String lifespan) {
		this.lifespan = lifespan;
	}
	public String getBiggest_threat() {
		return biggest_threat;
	}
	public void setBiggest_threat(String biggest_threat) {
		this.biggest_threat = biggest_threat;
	}
	public String getDiet() {
		return diet;
	}
	public void setDiet(String diet) {
		this.diet = diet;
	}
	
	public Animals() {
		super();
	}
	
	public Animals(String name, String location, String habitat, String lifespan, String biggest_threat, String diet) {
		super();
		this.name = name;
		this.location = location;
		this.habitat = habitat;
		this.lifespan = lifespan;
		this.biggest_threat = biggest_threat;
		this.diet = diet;
	}
	
	public Animals(Long id, String name, String location, String habitat, String lifespan, String biggest_threat,
			String diet) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
		this.habitat = habitat;
		this.lifespan = lifespan;
		this.biggest_threat = biggest_threat;
		this.diet = diet;
	}
	
	
	
}
