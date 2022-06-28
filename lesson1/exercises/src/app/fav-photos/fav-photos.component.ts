import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some pictures from my life';
  image1 = 'https://www.visitphilly.com/areas/montgomery-county/ardmore/';
  image2 = 'exercises/src/app/fav-photos/Images/Screen Shot 2022-06-02 at 7.13.30 PM.png';
  image3 = 'exercises/src/app/fav-photos/Images/tentRocks.jpg';

  constructor() { }

  ngOnInit() {
  }

}