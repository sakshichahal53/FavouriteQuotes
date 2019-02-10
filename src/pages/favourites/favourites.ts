import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes.service';
import {Quote} from '../../data/quote.interface'

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
 
  quotes:Quote[]
  constructor(private quoteService:QuotesService)
  {

  }

  ionViewWillEnter()
  {
    this.quotes= this.quoteService.getFavouriteQuotes()
  }
}
