import { useState } from "react";
export default function Input(){

    const [amount ,setAmount] = useState('');
    return(
        <input type="text" value={amount} onChange={e => setAmount(e.target.value)}/>
    );
}