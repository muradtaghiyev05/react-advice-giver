import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Advice from './Advice';
import Button from './Button';

function App() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice")
    .then((res) => {
    console.log(res.data.slip)
    setAdvice(res.data.slip)
  })}, [])

  function newAdvice() {
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => {
      console.log(res.data.slip)
      setAdvice(res.data.slip)})
  }

  return (
    <div className="App">
      <h1>Here is your advice:</h1>
      <Advice id={advice.id} advice={advice.advice} />
      <Button newAdvice={newAdvice} />
    </div>
  );
}

export default App;
