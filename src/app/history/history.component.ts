import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../Model/Profile';
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.profiles = this.historyService.getHistory()
    console.log(this.profiles)
  }




}
