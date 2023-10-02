import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  listUsers: any;
  charging: boolean;
  actualPage: number;
  totalPages: number;

  constructor(private userService: UserService){
    this.charging = true;
    this.actualPage = 1;
    this.totalPages = 1;
    this.userService.getUsers().subscribe(data => {
      this.charging = false; 
      this.listUsers = data
      this.actualPage = data
     })
  }

  ngOnInit(): void {
    
  }
}
