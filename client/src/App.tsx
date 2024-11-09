import { useState } from 'react'
import './index.css'
// import Input from './Input'
import AmountInput from './AmountInput';
import ResultRow from './ResultRow';

function App() {   
  const [amount ,setAmount] =useState('100');
  return ( 
  <main className='max-w-2xl mx-auto px-4 py-8' >
      <h1 className='uppercase text-4xl text-center font-bold bg-gradient-to-br from-purple-600
      bg-clip-text text-transparent to-sky-400 from-30%'> 
        Find the Cheapest BTC</h1> 
      
      <div className='flex justify-center mt-8'>
       < AmountInput 
        value ={amount}
        onChange={e => setAmount(e.target.value)}
        
       />
      </div>
     
     <div className='mt-6'>
      <ResultRow/>
      <ResultRow/>
      <ResultRow/>
      <ResultRow loading={true}/>
     </div>
      
  </main>
  )
}
export default App
