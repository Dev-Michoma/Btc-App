import { useState } from 'react'
import './index.css'
import Input from './Input'


function App() {   
  const [amount ,setAmount] =useState('');
  return ( 
  <main className='max-w-2xl mx-auto px-4 py-8' >
      <h1 className='uppercase text-4xl text-center font-bold bg-gradient-to-br from-purple-600
      bg-clip-text text-transparent to-sky-400 from-30%'> 
        Find the Cheapest BTC</h1> 
      
      <div className='flex justify-center mt-8'>
     
      </div>
     
      
  </main>
  )
}
export default App
