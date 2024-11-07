import { useState } from "react";

export default function Input(){
    const [amount ,setAmount] = useState('');
    return(
  <main className='max-w-2xl  px-4 py-8' >
    <h1 className='uppercase text-3xl text-center font-bold'>Find Cheapest BTC</h1>

    <input className= "bg-gray-400" type="text" value={amount} onChange={e=> setAmount(e.target.value)}/>
   </main>
    );
}