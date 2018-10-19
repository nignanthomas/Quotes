import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;

  @Output() isDelete = new EventEmitter<boolean>;
  @Output() isPlus = new EventEmitter<boolean>;
  @Output() isMinus = new EventEmitter<boolean>;

  quoteDelete(delete:boolean) {
    this.isDelete.emit(delete);
  }
  votePlus(plus:boolean) {
    this.isPlus.emit(plus);
  }
  voteMinus(minus:boolean) {
    this.isMinus.emit(minus);
  }


  constructor() { }

  ngOnInit() {
  }

}
