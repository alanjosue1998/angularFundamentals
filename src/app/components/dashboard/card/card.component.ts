import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() user:any;
  name: string;
  email: string;
  gender: string;
  id: number;

  constructor(private router: Router){
    this.name = '';
    this.email = '';
    this.gender = '';
    this.id = 0;
  }

  ngOnInit(): void {
    this.name=this.user.name;
    this.email=this.user.email;
    this.gender=this.user.gender;
    this.id=this.user.id;
  }

  lookDetails(): void {
    this.router.navigate(['dashboard/user'],{ queryParams: {id: this.id }})
  }

}
