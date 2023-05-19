import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-openingpage',
  templateUrl: './openingpage.component.html',
  styleUrls: ['./openingpage.component.css']
})
export class OpeningpageComponent implements OnInit {
  constructor(private wowService: NgwWowService,private Router:Router) {
    this.wowService.init();
  }

ngOnInit(): void {
  
}
toHome()
{
  setTimeout(() => {
    this.Router.navigate(['/Home/About'])
    
  }, 7);
}
}
