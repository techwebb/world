import { Component, OnInit } from '@angular/core';

import { Person } from '../models/Person';
import { Location } from '../models/Location';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {

  raceOptions = [];
  person:Person;

  constructor() { }

  ngOnInit() { 
    const location = new Location('Springfield');
    this.person = new Person();
    //this.person.name = 'Tim';
    this.person.setLocation(location);
    this.raceOptions = location.raceDistribution();
  }

  setPropRequest(value, prop){
    console.log("parent: ",value, prop);
    this.person.set(prop, value);
  }

  setName(){
    this.person.set('name', 'Tim');
  }
  

}
