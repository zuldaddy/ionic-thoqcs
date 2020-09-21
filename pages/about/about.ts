import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'],
})
export class AboutPage {

  origPrice:number; 
  sellPrice:number;
  markdownSavings: number;
  markdownRate: number;

  constructor(public navCtrl: NavController) {

  }

compute() {
  this.markdownSavings = this.origPrice - this.sellPrice;
  this.markdownRate = (this.markdownSavings / this.sellPrice) * 100;
}

}
