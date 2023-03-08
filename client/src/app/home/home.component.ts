import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit{
  constructor(public homeService: HomeService, public router: Router){}
  items:any[] = [];
  ngOnInit() {
    this.homeService.getPhotos().subscribe((data: any)=>{
      this.items = data.items;
      console.log('items', this.items)
    })
  }

  details(id:string){
    this.router.navigate(['details/', id]);
  }
}
