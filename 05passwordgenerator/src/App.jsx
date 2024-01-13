import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const generatePassword = useCallback(() => {
    let generatedPassword = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbersAllowed) characters += "0123456789"
    symbolsAllowed ? characters += "!@#$%^&*()_+" : "";

    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * characters.length + 1)
      generatedPassword += characters.charAt(randomNum);
    }
    setPassword(generatedPassword)
  }, [length, numbersAllowed, symbolsAllowed])

  useEffect(
    () => {
      generatePassword()
    }, [length, numbersAllowed, symbolsAllowed]
  )

  const passwordRef = useRef(null)

  const copyPassToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select()
  }
  

  return (
    <>
      <div className='flex flex-col items-center mt-16'>
        <h1 className='text-2xl font-medium mb-4'>Password Generator</h1>
        <div className='flex mb-2'>
          <div className='min-w-96'>
            <input 
            type="text" 
            className='w-full p-1.5 rounded-l outline-none'
            placeholder='Password' 
            readOnly
            ref={passwordRef}
            value={password}
            />
          </div>
          <div>
            <button 
            onClick={copyPassToClipboard}
            className='bg-green-400 h-full px-2 rounded-r'
            >
            Copy
            </button>
          </div>
        </div>
        <div className='flex gap-2'>
          <div>
            <input 
            type="range" 
            name="length" 
            id="length" 
            minLength={8} 
            maxLength={100} 
            value={length}
            onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length" className='ml-2'>Length: {length}</label>
          </div>
          <div>
            <input 
            type="checkbox" 
            name="numbersAllowed" 
            id="numbers" 
            defaultChecked = {numbersAllowed}
            onChange={() => setNumbersAllowed((prevState) => !prevState)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div>
            <input type="checkbox" 
            name="" 
            id="symbols" 
            defaultChecked = {symbolsAllowed}
            onChange={() => setSymbolsAllowed((prevState) => !prevState)}
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
