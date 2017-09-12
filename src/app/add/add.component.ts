import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Output() newQuote = new EventEmitter();
  constructor() { }

  quote = new Quote();
  onSubmit(){
    this.newQuote.emit(this.quote);
    this.quote = new Quote();
  }

  ngOnInit() {
  }

}
