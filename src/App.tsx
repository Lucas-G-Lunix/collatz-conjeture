import Inputs from './components/Inputs'
import Graph from './components/Graph'
import "./index.css"
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState<number[]>([1]);
  const [numbersToGraph, setNumbersToGraph] = useState<number[]>([]);

  function onClickLess() {
    if (formData.length > 1) {
      const values = [...formData]
      values.pop()
      setFormData(values)
    }
  }

  function onClickMore() {
    if (formData.length < 10) {
      const values = [...formData]
      values.push(1)
      setFormData(values)
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const values = [...formData]
    values[parseInt(event.target.name)] = parseInt(event.target.value)
    setFormData(values)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = [...formData]
    setNumbersToGraph(values) 
  }

  return (
    <main className='main--section'>
      <section className='data--section'>
        <h1 id='title--data'>Collatz Conjeture Graphing</h1>
        <form onSubmit={handleSubmit}>
          <section className='form--section'>
            <div className='inputs--section'>
              <Inputs data={formData} handleChange={handleChange} />
            </div>
            <div className='buttons--section'>
              <button id='btn--less' className='btn--input' onClick={onClickLess}>
                Less Numbers
              </button>
              <button id='btn--more' className='btn--input' onClick={onClickMore}>
                More Numbers
              </button>
              <button id='btn--submit' className='btn--input' type='submit'>
                Graph
              </button>
            </div>
          </section>
        </form>
      </section>
      <section className='graph--section'>
        <Graph numbersToGraph={numbersToGraph} />
      </section>
    </main>
  )
}

export default App
