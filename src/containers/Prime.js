import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class Prime extends Component {
  state = {
    inputNumber: '',
    primaryNumber : ''
  }
  changeNumber = (e) => {
    this.setState({ inputNumber: e.target.value })
  }
  findPrimaryNumber = (e) => {
    e.preventDefault()

    let arrayPrimaryNumber = [2, 3, 5, 7]
    const inputNumber = this.state.inputNumber

    const isPrimary = (number) => {
      for (let u = 0; u < 4; u++) {
        const PrimaryNumber = arrayPrimaryNumber[u]
        if (number % PrimaryNumber === 0) {
          return
        }
      }
      arrayPrimaryNumber.push(number)
    }
    for (let i = 10; arrayPrimaryNumber.length <= inputNumber; i++) {
      isPrimary(i)
    }
    this.setState({primaryNumber : arrayPrimaryNumber[inputNumber - 1]})
  }
  render() {
    return (
      <div>
        <p>Rentrer un nombre :</p>
        <Input placeholder='29' type="number" onChange={(e) => this.changeNumber(e)}></Input>
        <Button primary onClick={(e) => this.findPrimaryNumber(e)}>Ok</Button>
        <div>
          {this.state.primaryNumber}
        </div>
      </div>
    )
  }
}

export default Prime
