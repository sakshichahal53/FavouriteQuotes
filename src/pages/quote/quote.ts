import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
   person:string
   text:string

  constructor(private viewCtrl:ViewController,
    private navParams:NavParams)
  {}

  ionViewDidLoad()            //since it is a modal, hence we used ionViewWillLoad()
  {
    this.person =this.navParams.get('person')
    this.text=this.navParams.get('text')
  }

  OnClose(remove=false)
  {
       this.viewCtrl.dismiss(remove);
  }
}
