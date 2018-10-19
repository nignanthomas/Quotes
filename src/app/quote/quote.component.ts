import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, "I always choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.", "Bill Gates", 0, 0, "ninganthomas"),
    new Quote(2, "Getting information off the Internet is like taking a drink from a fire hydrant.", "Mitchell Kapor", 0, 0, "nignanthomas"),
  ]

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }



  constructor() { }

  ngOnInit() {
  }

}
