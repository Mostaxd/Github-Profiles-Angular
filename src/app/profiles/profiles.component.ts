import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  search: string = ''
  profile: any;
  showProfile: boolean = false;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {

  }

  getProfile() {
    this.profileService.updateSearchValue(this.search)
    this.profileService.getProfile().subscribe((profile: any) => this.profile = profile)
    this.showProfile = true
  }

  hide() {
    this.showProfile = false;
  }

}
