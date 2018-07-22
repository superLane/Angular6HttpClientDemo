import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

 interface Movie{
   Search: any[];
   Response : string;
   TotalResults: string;
 }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Movie Enthusiast';
  searchKey: string;
  found: boolean;
  movieNotFound: boolean;
  url: string;
  Search: any[];  

  constructor(private http: HttpClient){};
  onKeyup(event){
    this.searchKey = event.target.value;
    this.found = false;
    this.movieNotFound = false;
  }
  
  doSearch(){
    this.url = 'https://www.omdbapi.com/?apikey=3d106bc2&s='
    this.http.get(this.url+ this.searchKey)
    .subscribe(
      (data: Movie) =>{        
        if (data.Response="True"){
          this.found=true;
          this.Search = data.Search;          
          //console.log(this.Search);
        }
        else this.movieNotFound = true;
      } 
    )
  }
}




