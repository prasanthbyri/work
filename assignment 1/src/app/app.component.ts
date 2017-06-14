import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name = 'prasanth';
  @Output() age = 24;
  @Output() email = 'byri@gmail.com';
  constructor() {  }
  
    }

