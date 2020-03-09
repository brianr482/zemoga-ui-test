import { Injectable } from '@angular/core';
import celebritiesFile from '@dummy/celebrities.dummy.json';
import { Celebrity } from '@app/shared/models/celebrity.model';

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  constructor() { }

  public get celebrities(): Celebrity[] {
    return celebritiesFile.celebrities;
  }

}
