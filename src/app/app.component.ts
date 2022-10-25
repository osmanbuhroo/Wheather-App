import { Component, OnInit } from '@angular/core';
import { WheatherService } from 'src/services/wheather.service';
import { WeatherData } from './Models/wheather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent  implements OnInit{
  title = 'wheatherApp';
  location:string= "";
  constructor(private wheatherService:WheatherService ){
    
  }
  wheatherdata?:WeatherData;
  
  ngOnInit(): void {
  this.wheatherService.getWheatherData('delhi').subscribe 
  ({
    next:(Response)=>{
      this.wheatherdata=Response;
    }
  }) 

  }

  

}
