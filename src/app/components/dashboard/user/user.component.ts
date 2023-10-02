import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  gender: string;
  status: string;
  id:string;
  charging: boolean;

  constructor(private aRoute:ActivatedRoute, private userService: UserService){
    this.name = "";
    this.gender= "";
    this.email="";
    this.status="";
    this.id="";
    this.charging=true;

    this.aRoute.queryParams.pipe(filter(params => params['id'])).subscribe(params => {
      this.id = params['id'];
    })

    this.userService.getUser(this.id).subscribe(data =>{
      this.charging = false;
      this.name = data.name;
      this.gender=data.gender;
      this.email=data.email;
      this.status=data.status;
    })
  }

  ngOnInit(): void {
    
  }
}
