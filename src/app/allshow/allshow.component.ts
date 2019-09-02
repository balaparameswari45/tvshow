import { Component, OnInit } from '@angular/core';
import { Allshowinfo } from '../ishowinfo'
import { ServiceallshowService } from '../serviceallshow/serviceallshow.service';

@Component({
  selector: 'app-allshow',
  templateUrl: './allshow.component.html',
  styleUrls: ['./allshow.component.css']
})
export class AllshowComponent implements OnInit {

  
  
  shows:Allshowinfo[] = [];

  constructor(private showservice: ServiceallshowService) { }

  ngOnInit() {
    this.showservice.getmyshow('girls').subscribe(data => this.shows.push(data));
    
    
  }

}
