import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

class Prime extends Component {
  state = {
    inputNumber: undefined,
    primaryNumber: '',
    searchHistoric: [],
  }
  changeNumber = e => {
    this.setState({ inputNumber: e.target.value })
  }
  findPrimaryNumber = e => {
    e.preventDefault()
    this.setState({
      searchHistoric: [this.state.inputNumber, ...this.state.searchHistoric]
    })

    /* Fonction trouver le n nombre premier */
    let arrayPrimaryNumber = [2, 3, 5, 7]
    const inputNumber = this.state.inputNumber

    const isPrimary = number => {
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
    const primaryNumber = arrayPrimaryNumber[inputNumber - 1]
    this.setState({
      primaryNumber: [primaryNumber, ...this.state.primaryNumber],
    })
  }
  componentDidMount() {
    const localStorageHistoric = localStorage.getItem('searchHistoric')
    console.log(typeof(localStorageHistoric))
    if (localStorageHistoric) {
      this.setState({ searchHistoric: JSON.parse(localStorageHistoric) })
    }
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(nextState.searchHistoric);
    localStorage.setItem('searchHistoric', JSON.stringify(nextState.searchHistoric))
  }
  render() {
    const state = this.state
    return (
      <div>
        <h3>Rentrer un nombre :</h3>
        <form onSubmit={e => this.findPrimaryNumber(e)}>
          <Input
            ref={input => (this.textInput = input)}
            placeholder="29"
            type="number"
            onChange={e => this.changeNumber(e)}
          />
          <Button primary>Ok</Button>
        </form>
        <span>resultat : </span>{state.primaryNumber[0]}
        <h3>Historique</h3>
        <p>Nombres demandés</p>
        {state.searchHistoric.map(number => (
          <div key={Math.random() * number}>{number}</div>
        ))}
      </div>
    )
  }
}

export default Prime
