import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import swal from 'sweetalert';


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

  deleteQuote(isDelete, index) {
    if (isDelete) {
      let toDelete = confirm("Please, confirm deletion.");
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  plusVote(isPlus, index) {
    if (isPlus) {
      this.quotes[index].upVote += 1;
    }
  }

  minusVote(isMinus, index) {
    if (isMinus) {
      this.quotes[index].downVote += 1;
    }
  }


  addNewQuote(quote){
    if (quote.textQuote == "" || quote.author == "" || quote.username == "") {
      swal({
        title: "Empty Field(s)!",
        text: "Please fill all input fields before posting!",
        icon: "warning",
        // button: "Got it!"
      });
      // alert("Empty field");
    } else {
          let quoteLength = this.quotes.length;
          quote.id=quoteLength+1;
          quote.submitDate = new Date();
          this.quotes.push(quote);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
