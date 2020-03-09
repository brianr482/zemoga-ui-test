import { Injectable } from '@angular/core';
import userFile from '@dummy/user.dummy.json';
import { User } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public get user(): User {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      return JSON.parse(localUser);
    }
    this.storeUser(userFile);
    return userFile;
  }

  public storeUser(userData: User) {
    localStorage.setItem(
      'user', JSON.stringify(userData)
    );
  }
}
