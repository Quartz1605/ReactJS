//Bascially yeh function hai and {} uski andar ki chize uske parameters ke name hai jo function expect karta hai.
//like label = ? ye hame pass karna padega.
//Reason of adding "key" select wala loop is to optimize the performance, uski value hamesha input dena.
//kabhi js likhna in html use "{}" iske andar likho.
import { useId } from "react";


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {

  //'9' line pe javascript ke andar CSS likhi hai using backticks,cus if user wants to give className khudse toh wo bhi de sakta hai.
  
  //Creating a unique id using a hook to bind label and input.

  const amountInputId = useId()


  
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value)) }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"

          value={selectCurrency}
          onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
          disabled={currencyDisable}

        >

          
          {currencyOptions.map((Currency) => {
            
            return(
            <option key={Currency} value = {Currency}>
              {Currency}
            </option>
            )
          }
         )}
          

        </select>
      </div>
    </div>
  );
}

export default InputBox;