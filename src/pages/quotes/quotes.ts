import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { Quote } from "../../data/quote.interface";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string}[];
  
  constructor(private navParams: NavParams) {}
  
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

}
