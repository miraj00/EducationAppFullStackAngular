import { Component, Input, ViewChild } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-weekly-photo',
  templateUrl: './weekly-photo.component.html',
  styleUrls: ['./weekly-photo.component.css'],
 
})

export class WeeklyPhotoComponent {

	// @Input() item : string ='Food';

	_albums: any = [];
  
	 x : number = 0;
	 y: number = 0;


	constructor(private _lightbox: Lightbox) {
	
	}

	
	renderItem(item : string){
		
		
		this._albums = [];

		if ( item === 'Food') { this.x = 1; this.y = 12;}
		if ( item === 'Animals') {this.x = 13; this.y = 24;}
		if ( item === 'Plants') {this.x = 25; this.y = 36;}
		if ( item === 'Nature') {this.x = 37; this.y = 48;}
		if ( item === 'Mountains') {this.x = 49; this.y = 60;}
		if ( item === 'Trees') {this.x = 61; this.y = 72;}
		if ( item === 'Birds') {this.x = 73; this.y = 84;}
		if ( item === 'Waterfalls') {this.x = 85; this.y = 90;}
		if ( item === 'Fish') {this.x = 97; this.y = 108;}
		if ( item === 'Vegetables') {this.x = 109; this.y = 120;}

	  for (let i = this.x; i <= this.y; i++) {
		const src = './assets/' + i + '.jpg';
		const caption = 'Image ' + i + ' caption';
		const thumb = './assets/' + i + '.jpg';
		const album = {
		   src: src,
		   caption: caption,
		   thumb: thumb
		};
		
		this._albums.push(album);
	  }


	}


	open(index: number): void {
	  // open lightbox
	  this._lightbox.open(this._albums, index);
	}
  
	close(): void {
	  // close lightbox programmatically
	  this._lightbox.close();
	}
	


}

