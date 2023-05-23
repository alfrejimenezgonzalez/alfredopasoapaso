import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-becarios',
  templateUrl: './becarios.page.html',
  styleUrls: ['./becarios.page.scss'],
})
export class BecariosPage implements OnInit {
//declarar users para rescatar el json
users: any =[];


//permissos NGif , condicion 


  constructor(private router: Router,
    private http: HttpClient
)
  
  {}

  ngOnInit() {
    this.getUsers().subscribe(res=>{
      this.users = res;

    });
    }
    

  
  
  getUsers() {
    return this.http
    .get("/assets/becarios.json")
      //pipe es lo de map ayuda decirle lo que es data para no tener que ponerlo en cada momento)
    .pipe( 
      map((res:any) =>{
        return res.data;
      })
    )
  }

  

} 




