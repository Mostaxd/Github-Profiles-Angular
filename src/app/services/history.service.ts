import { Injectable } from '@angular/core';
import { Profile } from '../Model/Profile';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  profiles: Profile[] = []
  constructor() { }

  addToHistory(profile: Profile){
    this.profiles.push(profile)
  }

  getHistory() {
    return this.profiles;
  }
}
