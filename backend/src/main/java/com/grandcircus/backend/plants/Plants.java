package com.grandcircus.backend.plants;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="plants")
public class Plants {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String common_name;
	private String cycle;
	private String watering;
	private String sunlight;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCommon_name() {
		return common_name;
	}
	public void setCommon_name(String common_name) {
		this.common_name = common_name;
	}
	public String getCycle() {
		return cycle;
	}
	public void setCycle(String cycle) {
		this.cycle = cycle;
	}
	public String getWatering() {
		return watering;
	}
	public void setWatering(String watering) {
		this.watering = watering;
	}
	public String getSunlight() {
		return sunlight;
	}
	public void setSunlight(String sunlight) {
		this.sunlight = sunlight;
	}
	
	public Plants() {
		super();
	}
	public Plants(String common_name, String cycle, String watering, String sunlight) {
		super();
		this.common_name = common_name;
		this.cycle = cycle;
		this.watering = watering;
		this.sunlight = sunlight;
	}
	
	public Plants(Long id, String common_name, String cycle, String watering, String sunlight) {
		super();
		this.id = id;
		this.common_name = common_name;
		this.cycle = cycle;
		this.watering = watering;
		this.sunlight = sunlight;
	}
	
	
}
