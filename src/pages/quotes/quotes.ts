import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface'
import { QuotesService } from '../../services/quotes.service';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup:{category:string, quotes:Quote,icon:string }
  quoteService:QuotesService
  constructor( public navParams: NavParams,
               private alertCtrl:AlertController) {  
  }

  ionViewDidLoad()
  {
      this.quoteGroup=this.navParams.data    //add elvis '?' in html to use this approach
      console.log(this.quoteGroup);
    }

  onAddToFavourite(selectedquote:Quote)
  {
     const alert = this.alertCtrl.create({
       title:'Add Quote',
       subTitle:'Are you sure?',
       message: 'Are you sure you want to add the quote?',
       buttons: [{
         text:'Yes, go ahead',
         handler:()=>{
           this.quoteService.addQuoteToFavourite(selectedquote)
           console.log('OK');
         }
       },
      {
          text:'No, I changed my mind',
          role:'cancel',       //adding this role helps ionic to understand automatically
          handler:()=>{
            console.log('No');
          }
      }]
     });
     alert.present();
  }
}
