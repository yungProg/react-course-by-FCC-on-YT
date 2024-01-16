import { useId } from "react"
import PropTypes from "prop-types"

function InputBox({
    label,
    amount,
    onAmountChange,
    amountDisabled  = false,
    selectedCurrency,
    onSelectedCurrencyChnage,
    currencyOptions = [],
    currencyDisabled = false
}) {

    const id = useId()


  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
        <div className='w-1-2'>
            <label className='text-black/40 mb-2 inline-block' htmlFor={id}>{label}</label>
            <input 
            id={id}
            className='outline-none w-full bg-transparent py1.5'
            type='number' 
            placeholder='Amount' 
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select 
            name="" 
            id=""
            className='rounded-lg px-1 bg-gray-100 cursor-pointer outline-none'
            disabled={currencyDisabled}
            value={selectedCurrency}
            onChange={(e) => onSelectedCurrencyChnage && onSelectedCurrencyChnage(e.target.value)}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} id="currency">{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

InputBox.propTypes = {
    label: PropTypes.string,
    amount: PropTypes.number,
    onAmountChange: PropTypes.func,
    amountDisabled: PropTypes.bool,
    selectedCurrency: PropTypes.string,
    onSelectedCurrencyChnage: PropTypes.func,
    currencyOptions: PropTypes.array,
    currencyDisabled: PropTypes.bool,
}

export default InputBox