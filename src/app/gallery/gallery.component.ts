import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from 'app/services/image-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [];
  slideIndex = 0;
  awardsImages = [];
  personalImages = [];
  personalitiesImages: [];
  concertsImages: [];

  constructor(private imageService: ImageServiceService) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.fetchAwardsImages()
      .subscribe(images => this.awardsImages = images);
    this.imageService.fetchPersonalImages()
      .subscribe(images => this.personalImages = images);
    this.imageService.fetchPersonalitiesImages()
      .subscribe(images => this.personalitiesImages = images);
    this.imageService.fetchConcertsImages()
      .subscribe(images => this.concertsImages = images);
  }

  openModal() {
    document.getElementById('imgModal').style.display = 'block';
  }

  closeModal() {
    document.getElementById('imgModal').style.display = 'none';
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(slideIndex);

  showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('img-slides') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('images') as HTMLCollectionOf<HTMLElement>;
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    if (dots && dots.length > 0) {
      dots[this.slideIndex - 1].className += ' active';
    }
  }
}

