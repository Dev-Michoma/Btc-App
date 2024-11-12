import axios from 'axios';


 export async function getOfferFromPaybis(amount:number):Promise<string | void>{
try{
    const res = await axios.post('https://api.paybis.com/public/processing/v2/quote/buy-crypto' ,{
        "currencyCodeFrom":"USD",
        "currencyCodeTo":"BTC",
        "requestedAmount":{"amount":amount.toString(),
        "currencyCode":"USD"},
        "requestedAmountType":"from",
        "promoCode":null,
        "paymentMethod":"credit-card"});
        return res.data?.paymentMethods?.[0]?.amountTo?.amount.toString();
} catch (e){
     console.error(e);
     return;
}

}



export async function getOfferFromGuardian(amount: number): Promise<string | void> {
    try {

        const res = await axios.get(`https://api-payments.guardarian.com/v1/estimate?from_amount=${amount}
            &from_currency=EUR&to_currency=BTC&platform=web&from_network=EUR&to_network=BTC`, {
            headers: {
                'X-Api-Key': 'b9ee06c9-269d-4260-8cc5-1301da21197b'
            }
        });

        return res.data?.value?.toString();  
    } catch (e) {
       
        console.error(e);
        return; // Return undefined in case of an error
    }
}


export async function getOfferFromMoonPay(amount:number):Promise<string | void>{
    try{
      const res = await axios.get(`https://api.moonpay.com/v3/currencies/btc/buy_quote?apiKey=pk_live_R5Lf25uBfNZyKwccAZpzcxuL3ZdJ3Hc&baseCurrencyAmount=${amount}&baseCurrencyCode=usd&fixed=true&areFeesIncluded=true&quoteType=principal`)
        return ( res)?.data?.quoteCurrencyAmount;
    } catch (e){
         console.error(e);
         return;
    }
    
    }


    export async function getOfferFromTransac(amount:number):Promise<string | void>{
        try{
          const res = await axios.get(`https://api.transak.com/api/v1/pricing/public/widget/quotes?fiatCurrency=USD&cryptoCurrency=
            ETH&paymentMethod=credit_debit_card&isBuyOrSell=BUY&fiatAmount=${amount}&partnerApiKey=02624956-010b-4775-8e31-7b9c8b82df76&network=ethereum&quoteCountryCode=KE`)
        
            return ( res)?.data?.cryptoAmount?.toString();
        } catch (e){
             console.error(e);
             return;
        }
        
        }