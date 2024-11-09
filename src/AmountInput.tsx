import Input, { InputProps } from "./Input";
export default function AmountInput(props:InputProps){
  
    return(
  <div>
  <Input 
      value={props.value}
       onChange={props.onChange}/>

       USD

  </div>
    );
}