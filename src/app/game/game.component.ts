import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  compteur = 1;
  
  result = undefined;
  score = 0;
  start_date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  next(){
    if(this.compteur <10){
     // if(this.result == (this.nb1 * this.nb2)){
        this.score++;
    //  }
      this.compteur++;

      this.result = undefined;
    }
  }
  finish(){
   
      this.score++;

    this.compteur++;

    let end_date = new Date();
    let diff = end_date.getTime() - this.start_date.getTime();
    
    this.score = Math.floor((this.score * 1000000)/diff)
    console.log(diff)


    
  }

}
