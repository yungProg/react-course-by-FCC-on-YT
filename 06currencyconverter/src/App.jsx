import { useState } from 'react'
import { InputBox } from "./components/index.js"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import bg from "./assets/pexels-ivan-babydov-7788006.jpg"


function App() {
  const [cash, setCash] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("ghs");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  
  function swap() {
    setFrom(to)
    setTo(from)
    setConvertedAmount(cash)    
    setCash(convertedAmount)
  }

  function convert() {
    setConvertedAmount(cash * currencyInfo[to])
  }


  return (    
    <div 
    style={{background: `url(${bg})`}}
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
          >
            <div className='w-full mb-1'>
            <InputBox 
            label={"From"}
            amount={cash}
            onAmountChange={(amount) => setCash(amount)}
            selectedCurrency={from}
            currencyOptions={options}
            />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              type='button'
              onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className='w-full mb-1'>
            <InputBox 
            label={"To"}
            amount={convertedAmount && convertedAmount.toFixed(2)}
            selectedCurrency={to}
            currencyOptions={options}
            onSelectedCurrencyChnage={(to) => setTo(to)}
            amountDisabled = {true}
            />
            </div>
            <button 
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            type="submit"
            >
              {`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
