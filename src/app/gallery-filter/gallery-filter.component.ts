import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-filter',
  templateUrl: './gallery-filter.component.html',
  styleUrls: ['./gallery-filter.component.scss']
})
export class GalleryFilterComponent implements OnInit {
  galleryItems = [
    {tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(30).jpg'},
    {tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(1).jpg'},
    {tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(42).jpg'},
    {tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(2).jpg'},
    {tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(114).jpg'},
    {tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(4).jpg'},
    {tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(6).jpg'},
    {tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(115).jpg'},
    {tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(44).jpg'},
    {tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(5).jpg'},
    {tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(45).jpg'},
    {tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(46).jpg'},
    {tag: 'food', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(47).jpg'},
    {tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(111).jpg'},
    {tag: 'architecture', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(3).jpg'},
    {tag: 'nature', imgSrc: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(112).jpg'}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
