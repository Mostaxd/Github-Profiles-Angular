import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { HistoryService } from '../services/history.service';
import { Profile } from '../Model/Profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  search: string = ''
  profile!: Profile;
  showProfile: boolean = false;

  constructor(private profileService: ProfileService,
              private historyService: HistoryService) {
  }

  ngOnInit(): void {

  }

  getProfile() {
    this.profileService.updateSearchValue(this.search)
    this.profileService.getProfile().subscribe((profile: any) => {
      this.profile = profile
      this.historyService.addToHistory(this.profile)
    })

    this.showProfile = true
  }

  hide() {
    this.showProfile = false;
  }

}
