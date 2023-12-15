import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function collatzConjeture(fromNumber: number): Array<number> {
  let number_list: Array<number> = [];
  while (fromNumber !== 1) {
    if ((fromNumber % 2) === 0) {
      fromNumber = Math.floor(fromNumber / 2)
      number_list.push(fromNumber)
      continue
    }
    fromNumber = Math.floor((fromNumber * 3) + 1)
    number_list.push(fromNumber)
  }
  return number_list
}

function Graph(props: { numbersToGraph: number[] }) {
  const [lines, setLines] = useState<any[]>([])
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    const numbersToGraph = props.numbersToGraph
    setData(() => {
      const arraydata: any[] = []
      const collatzOfNumbers: any[] = []
      let largestCollatz = 0
      numbersToGraph.forEach(element => {
        let collatzOfNumber = collatzConjeture(element)
        collatzOfNumbers.push({ [element]: collatzOfNumber })
        if (collatzOfNumber.length > largestCollatz) {
          largestCollatz = collatzOfNumber.length
        }
      });
      for (let index = 0; index < largestCollatz; index++) {
        let object: any = {}
        object.name = index
        numbersToGraph.forEach((element, indexNumber) => {
          if (collatzOfNumbers[indexNumber][element][index] !== undefined) {
            object[element] = collatzOfNumbers[indexNumber][element][index]
          }
        });
        arraydata.push(object)
      }
      return arraydata
    })
    setLines(() => {
      let lines: any[] = []
      numbersToGraph.forEach((element, index) => {
        lines.push((<Line key={index} name={element.toString()} type="monotone" dataKey={element} stroke={randomColor()} />))
      });
      return lines
    })
  }, [props.numbersToGraph])
  return (
    <LineChart
      width={1300}
      height={580}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines}
    </LineChart>
  )
}

export default Graph