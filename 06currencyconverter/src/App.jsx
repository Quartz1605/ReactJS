import { useState } from 'react'
import './App.css'
import InputBox from './components/Inputbox';
import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {

  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)

  function swap(){

    setTo(from);
    setFrom(to);
    setconvertedAmount(amount);
    setAmount(convertedAmount);

  }
  
  function convert(){
    setconvertedAmount(amount * currencyInfo[to])
  }
  
  
  
  
  
  
  
  return (

    <div className='w-full'>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              currencyOptions={options}
              amount={amount}
              onCurrencyChange={(currency) => setFrom(currency)

              }
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:cursor-pointer" onClick={swap}>
              swap
            </button>
          </div>

          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To" 
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)

              }
              selectCurrency={to}
              amountDisable={true}
              onAmountChange={(convertedAmount) => setconvertedAmount(convertedAmount)}
              />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:cursor-pointer" >
            Convert
          </button>





        </form>

      </div>
    </div>



  )






}

export default App
