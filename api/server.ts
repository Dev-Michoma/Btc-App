import { getOfferFromPaybis } from "./providers";

// server.js
const express = require('express');  // Importing express module
const app = express();               // Creating an Express app

const PORT = process.env.PORT || 3005;  // Defining the port

// Setting up a simple route
// app.get('/', (req, res) => {
//     res.send('Hello, World!');  // Respond with 'Hello, World!'
// });

export default async function (params: any , context: any){
    const btc = await getOfferFromPaybis(100);
    return {
        mesage: btc,
      };
} 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
