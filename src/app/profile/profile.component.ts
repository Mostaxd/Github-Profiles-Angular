import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../Model/Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: Profile = {
                 name: '',
                 avatar_url:'',
                 login: '',
                 company: '',
                 location: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
