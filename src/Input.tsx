import { ChangeEventHandler, useState } from "react";


export type InputProps ={
    value: string;
    onChange: ChangeEventHandler <HTMLInputElement>;
    className?: string;
}

export default function Input(props:InputProps){

    const [amount ,setAmount] = useState('');
    return(
        <input type="text" 
         className ={"border border-white/10 bg-blue-950 p-2 " + props.className}
        value={props.value} 
        onChange={props.onChange}/>
    );
}