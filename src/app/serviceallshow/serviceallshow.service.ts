import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Allshowinfo } from "../ishowinfo";
import { map } from "rxjs/operators";

interface ishowinfodata {
  show: {
    name: string;
    genres: string[];
    image: {
      medium: string;
    };
  };
}

@Injectable({
  providedIn: "root"
})
export class ServiceallshowService {
  constructor(private httpclient: HttpClient) {}

  getmyshow(show: string) {
    return this.httpclient
      .get<ishowinfodata[]>(
        `${environment.baseUrl}api.tvmaze.com/search/shows?q=${show}`
      )
      .pipe(map(data => this.transformtoallshowinfo(data)));
  }

  private transformtoallshowinfo(data: ishowinfodata[]): Allshowinfo[] {
    /* return {    
    name: data.show.name,
    genre: data.show.genres[0],
    image:data.show.image.medium
  }*/
    if (data != null && data.length > 0) {
      var shows: Allshowinfo[] = [];
      data.forEach(show => {
        var allTheGenres = "";
        let element: Allshowinfo = {
          name: show.show.name,
          genre: show.show.genres != null ? show.show.genres : "def", //TODO Construct csv string for the genres
          image: show.show.image != null ? show.show.image.medium : " "
        };
        shows.push(element);
      });
      return shows;
    } else {
      console.log("No shows found");
      //TODO Display the message in the UserInterface if no shows found
    }
    return null;
  }
}

// let myshow = [];
// let eachdata = {} as ishowinfodata;
// myshow.push(eachdata);
