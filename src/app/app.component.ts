import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allQuotes = [];
  addQuote(data){
    if(this.allQuotes.length == 0){
      this.allQuotes.push(data);
    }
    else{
      for(var i = 0; i < this.allQuotes.length; i++){
        if(data.votes > this.allQuotes[i].votes){
          break;
        }
      }
      this.allQuotes.splice(i, 0, data);
    }
  }
  upVote(idx){
    this.allQuotes[idx].votes++;
    if(idx != 0){
      if(this.allQuotes[idx].votes > this.allQuotes[idx-1].votes){
        var temp = this.allQuotes[idx];
        this.allQuotes[idx] = this.allQuotes[idx-1];
        this.allQuotes[idx-1] = temp;
      }
    }
  }

  downVote(idx){
    this.allQuotes[idx].votes--;
    if(idx != this.allQuotes.length-1){
      if(this.allQuotes[idx].votes < this.allQuotes[idx+1].votes){
        var temp = this.allQuotes[idx];
        this.allQuotes[idx] = this.allQuotes[idx+1];
        this.allQuotes[idx+1] = temp;
      }
    }
  }
  rmQuote(idx){
    this.allQuotes.splice(idx, 1);
  }
}
