import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{

  text:string;

  constructor(private userService: UserService) {
    this.text = ''
  }

  ngOnInit(): void {
    
  }
}
