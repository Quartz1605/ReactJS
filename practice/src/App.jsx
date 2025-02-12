import InputBox from "./components/Inputbox";
import './App.css'
import { useState } from "react"
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {

  const [amount, setAmount] = useState(null)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")


  const currencyinfo = useCurrencyinfo(from)
  const options = Object.keys(currencyinfo)


  function convert() {
    setConvertedAmount(amount * currencyinfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"

    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoptions={options}
                onAmountchange={(amount) => { setAmount(amount) }}
                onCurrencychange={(currency) => { setFrom(currency) }}
                selectCurrency={from}




              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"

                currencyoptions={options}
                onAmountchange={(convertedAmount) => setConvertedAmount(convertedAmount)}
                onCurrencychange={(currency) => { setTo(currency) }}
                amount={convertedAmount}
                selectCurrency={to}
                amountDisable={true}



              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:cursor-pointer">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App
