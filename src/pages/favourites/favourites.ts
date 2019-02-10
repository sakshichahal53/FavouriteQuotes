import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes.service';
import {Quote} from '../../data/quote.interface'
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
 
  quotes:Quote[]
  constructor(private quoteService:QuotesService,
    private modalctrl:ModalController,
    )
  {
  }

  ionViewWillEnter()
  {
    this.quotes= this.quoteService.getFavouriteQuotes()
  }

  onViewQuote(quote:Quote)
 {
    //to open and create the modal
    console.log('Inside Modal')
    const modal = this.modalctrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((remove: boolean)=>{  //function executed whenevr the view is dismiised;
        console.log('onDidDismiss')  
        if(remove)
        {
           this.onRemoveFromFavourites(quote)
        }
    });
    
 }

 onRemoveFromFavourites(quote:Quote)
 {
  this.quoteService.removeQuoteFromFavurite(quote)
  this.quotes=this.quoteService.getFavouriteQuotes();
 }


}
