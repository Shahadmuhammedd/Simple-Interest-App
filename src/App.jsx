
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [amount,setAmount] = useState(0)
  const [year,setYear] = useState(0)
  const [rate,setRate] = useState(0)
  const [interest,setInterest] = useState(0)
  console.log(amount,year,rate);

  const handleCalculate = (e)=>{
    const output = amount*year*rate/100
    setInterest(output)
  }

 

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple Interest Calculator</h1>
          <p>Calculate your simple interest with us</p>
        </div>

        <div className="total">
          <h1>&#8377;{interest}</h1>
          <p>your total interest</p>
        </div>

        <div className="form">
       <form>
        <div className="input">
        <TextField id="outlined-basic" label="Amount" onChange={(e)=>setAmount(e.target.value)} variant="outlined" />
        <TextField id="outlined-basic" label="Year"  onChange={(e)=>setYear(e.target.value)} variant="outlined" />
        <TextField id="outlined-basic" label="Rate"  onChange={(e)=>setRate(e.target.value)} variant="outlined" />
        </div>
        <div className="button">

        <Button onClick={e=>handleCalculate(e)} variant="contained">Calculate</Button>
        <Button variant="outlined">Reset</Button>
        </div>
       </form>
        </div>
      </div>
    </div>
  );
}

export default App;
