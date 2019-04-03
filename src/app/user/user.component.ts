import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private subject = new BehaviorSubject<boolean>(false);
  private _name: string;
  private _city: string;

  get getName() {
    return this._name;
  }

  get getCity() {
    return this._city;
  }
  
  constructor() { }

  ngOnInit() {

  }


}
