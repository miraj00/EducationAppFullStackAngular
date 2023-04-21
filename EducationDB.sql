DROP database EducationDB;
CREATE DATABASE EducationDB;

DROP table `animals`;

CREATE TABLE `animals` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(300) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `habitat` varchar(300) DEFAULT NULL,
  `lifespan` varchar(50) DEFAULT NULL,
  `biggest_threat` varchar(300) DEFAULT NULL,
  `diet` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)  
  );

INSERT INTO animals (name, location, habitat, lifespan, biggest_threat,diet) VALUES
('Cheetah', 'Africa', 'Open grassland', '10-12 years', 'habitat loss', 'carnivore');


CREATE TABLE `notes` (     
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(30) DEFAULT NULL,
  `body` varchar(5000) DEFAULT NULL, 
   PRIMARY KEY (`id`)  
);
 

INSERT INTO notes (title, body) VALUES
('favorite animal', 'I love Cheetahs');

CREATE TABLE `plants` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `common_name` varchar(300) DEFAULT NULL,
  `cycle` varchar(100) DEFAULT NULL,
  `watering` varchar(300) DEFAULT NULL,
  `sunlight` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)  
  );
  
INSERT INTO plants (common_name, cycle, watering, sunlight) VALUES
('rose cactus', 'perennial', 'average', 'full sun');

select * from animals;
select * from notes;
select * from plants;