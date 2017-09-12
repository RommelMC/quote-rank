import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote; 
  @Output() quoteUp = new EventEmitter();
  @Output() quoteDown = new EventEmitter();
  @Output() quoteDel = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  upVote(){
    console.log("+1");
    this.quoteUp.emit();
  }

  downVote(){
    console.log("+1");
    this.quoteDown.emit();
  }

  remove(){
    this.quoteDel.emit();
  }
}
