import { getOfferFromPaybis } from "./provider";
const express = require('express');  
const app = express();              

const PORT = process.env.PORT || 3005;  
export default async function (params: any , context: any){
    const btc = await getOfferFromPaybis(100);
    return {
        mesage: btc,
      };
} 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});