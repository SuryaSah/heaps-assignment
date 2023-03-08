import { Component, OnInit} from '@angular/core';
import { DetailsService } from './details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers:[DetailsService]
})
export class DetailsComponent implements OnInit {
  data:any;
  constructor(public detailsService:DetailsService, private route: ActivatedRoute){}
  ngOnInit() {
    const id:string = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    this.detailsService.getPhotosById(id).subscribe((res:any)=>{
      this.data = res[0];
    })
  }
}
