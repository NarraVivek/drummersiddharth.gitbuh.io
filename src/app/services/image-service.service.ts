import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { images, printMediaImages, awardImages, concertImages, personalImages, personalitiesImages } from '../services/data-image'

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() { }

  fetchImages(): Observable<any> {
    return of(images);
  }

  fetchPrintMediaImages(): Observable<any> {
    return of(printMediaImages);
  }

  fetchConcertsImages(): Observable<any> {
    return of(concertImages);
  }

  fetchAwardsImages(): Observable<any> {
    return of(awardImages);
  }

  fetchPersonalImages(): Observable<any> {
    return of(personalImages);
  }

  fetchPersonalitiesImages(): Observable<any> {
    return of(personalitiesImages);
  }
}
