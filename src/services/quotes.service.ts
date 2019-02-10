import { Quote } from '../data/quote.interface';
export class  QuotesService{
    private favQuotes: Quote[]=[];

    addQuoteToFavourite(quote:Quote)
    {
        this.favQuotes.push(quote);console.log(quote);
        
    }

    removeQuoteFromFavurite(quote:Quote)
    {
       const position= this.favQuotes.findIndex((quoteEl:Quote)=>{
            return quoteEl.id==quote.id;
       });
       this.favQuotes.splice(position,1);
    }

    getFavouriteQuotes()
    {
        return this.favQuotes.slice();    //basically create a copy of array
    }

    isQuoteFavourite(quote:Quote) 
    {
         return this.favQuotes.find((quoteEl : Quote)=>{
             return quoteEl.id==quote.id;
         })
     }
}