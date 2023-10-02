import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listUsers: any;

  constructor(private userService: UserService){
    this.userService.getUsers().subscribe( data=>{
      this.listUsers = data
     })
  }

  ngOnInit(): void {
    
  }
}
