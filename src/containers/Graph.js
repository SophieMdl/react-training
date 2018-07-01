import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'


class Graph extends Component {
  csvToJson = (csv) => {
    const lines = csv.split("\r\n")
    let result = []
    const headers = lines[0].split(",")
    for (let i = 1; i < lines.length; i++) {
      let obj = {}
      const currentline = lines[i].split(",")
      for (let j = 0; j < headers.length; j++) {
        if (headers[j] !== "date") {
          currentline[j] = Number.parseInt(currentline[j])
        }
        obj[headers[j]] = currentline[j]
      }
      result.push(obj)
    }
    return result //JSON
  }
  state = {
    data: []
  }
  componentDidMount() {
    fetch('./data_graph.csv')
      .then(res => res.text())
      .then(res => {
        this.setState({ data: this.csvToJson(res) })
      })
  }
  render() {
    return (
      <div>
        <LineChart width={1200} height={500} data={this.state.data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
            <Line dataKey="credit" stroke="#8884d8" />
            <Line dataKey="debit" stroke="#82ca9d" />
            <Line dataKey="balance" stroke="#ffc658" />
        </LineChart>
      </div>
    )
  }
}

export default Graph
