import { Injectable } from '@angular/core';
import celebritiesFile from '@dummy/celebrities.dummy.json';
import { Celebrity } from '@app/shared/models/celebrity.model';

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  constructor() { }

  public get celebrities(): Celebrity[] {
    const localCelebrities = localStorage.getItem('celebrities');
    if (localCelebrities) {
      return JSON.parse(localCelebrities);
    }
    this.storeCelebrities(celebritiesFile.celebrities);
    return celebritiesFile.celebrities;
  }

  public storeCelebrities(celebritiesData: Celebrity[]) {
    localStorage.setItem(
      'celebrities', JSON.stringify(celebritiesData)
    );
  }

}
