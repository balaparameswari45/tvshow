import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Allshowinfo } from '../ishowinfo';
import { map } from 'rxjs/operators';



interface ishowinfodata {
  show:{
    name:string,
    genres:string[],
    image: {
      medium: string
    }   
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServiceallshowService {

  constructor(private httpclient:HttpClient) {}

  getmyshow(show:string) {
    
    return this.httpclient.get<ishowinfodata[]>(`${environment.baseUrl}api.tvmaze.com/search/shows?q=${show}`).pipe(map(data => this.transformtoallshowinfo(data)));
  }

 
private transformtoallshowinfo(data: ishowinfodata[]): Allshowinfo { 
  
  let shows:ishowinfodata[] = [];
   return {    
    name:data.show.name,
    genre: data.show.genres[0],
    image:data.show.image.medium
  }
}
}


// let myshow = [];
// let eachdata = {} as ishowinfodata;
// myshow.push(eachdata);
