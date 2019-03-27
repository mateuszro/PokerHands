import React, { Component } from 'react';
import './index.css';
import styled from 'styled-components'
import SelectCard from './components/SelectCardWindow'

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards : [
        {name:'As Trefl', symbol:'A', suit:'Clubs', color:'#000000', value: 13},
        {name:'As Karo', symbol:'A', suit:'Diamonds', color:'#fe0000', value: 13},
        {name:'As Kier', symbol:'A', suit:'Hearts', color:'#fe0000', value: 13},
        {name:'As Pik', symbol:'A', suit:'Spades', color:'#000000', value: 13},
        {name:'Król Trefl', symbol:'K', suit:'Clubs', color:'#000000', value: 12},
        {name:'Król Karo', symbol:'K', suit:'Diamonds', color:'#fe0000', value: 12},
        {name:'Król Kier', symbol:'K', suit:'Hearts', color:'#fe0000', value: 12},
        {name:'Król Pik', symbol:'K', suit:'Spades', color:'#000000', value: 12},
        {name:'Dama Trefl', symbol:'Q', suit:'Clubs', color:'#000000', value: 11},
        {name:'Dama Karo', symbol:'Q', suit:'Diamonds', color:'#fe0000', value: 11},
        {name:'Dama Kier', symbol:'Q', suit:'Hearts', color:'#fe0000', value: 11},
        {name:'Dama Pik', symbol:'Q', suit:'Spades', color:'#000000', value: 11},
        {name:'Walet Trefl', symbol:'J', suit:'Clubs', color:'#000000', value: 10},
        {name:'WaletKaro', symbol:'J', suit:'Diamonds', color:'#fe0000', value: 10},
        {name:'Walet Kier', symbol:'J', suit:'Hearts', color:'#fe0000', value: 10},
        {name:'Walet Pik', symbol:'J', suit:'Spades', color:'#000000', value: 10},
        {name:'10 Trefl', symbol:'10', suit:'Clubs', color:'#000000', value: 9},
        {name:'10 Karo', symbol:'10', suit:'Diamonds', color:'#fe0000', value: 9},
        {name:'10 Kier', symbol:'10', suit:'Hearts', color:'#fe0000', value: 9},
        {name:'10 Pik', symbol:'10', suit:'Spades', color:'#000000', value: 9},
        {name:'9 Trefl', symbol:'9', suit:'Clubs', color:'#000000', value: 8},
        {name:'9 Karo', symbol:'9', suit:'Diamonds', color:'#fe0000', value: 8},
        {name:'9 Kier', symbol:'9', suit:'Hearts', color:'#fe0000', value: 8},
        {name:'9 Pik', symbol:'9', suit:'Spades', color:'#000000', value: 8},
        {name:'8 Trefl', symbol:'8', suit:'Clubs', color:'#000000', value: 7},
        {name:'8 Karo', symbol:'8', suit:'Diamonds', color:'#fe0000', value: 7},
        {name:'8 Kier', symbol:'8', suit:'Hearts', color:'#fe0000', value: 7},
        {name:'8 Pik', symbol:'8', suit:'Spades', color:'#000000', value: 7},
        {name:'7 Trefl', symbol:'7', suit:'Clubs', color:'#000000', value: 6},
        {name:'7 Karo', symbol:'7', suit:'Diamonds', color:'#fe0000', value: 6},
        {name:'7 Kier', symbol:'7', suit:'Hearts', color:'#fe0000', value: 6},
        {name:'7 Pik', symbol:'7', suit:'Spades', color:'#000000', value: 6},
        {name:'6 Trefl', symbol:'6', suit:'Clubs', color:'#000000', value: 5},
        {name:'6 Karo', symbol:'6', suit:'Diamonds', color:'#fe0000', value: 5},
        {name:'6 Kier', symbol:'6', suit:'Hearts', color:'#fe0000', value: 5},
        {name:'6 Pik', symbol:'6', suit:'Spades', color:'#000000', value: 5},
        {name:'5 Trefl', symbol:'5', suit:'Clubs', color:'#000000', value: 4},
        {name:'5 Karo', symbol:'5', suit:'Diamonds', color:'#fe0000', value: 4},
        {name:'5 Kier', symbol:'5', suit:'Hearts', color:'#fe0000', value: 4},
        {name:'5 Pik', symbol:'5', suit:'Spades', color:'#000000', value: 4},
        {name:'4 Trefl', symbol:'4', suit:'Clubs', color:'#000000', value: 3},
        {name:'4 Karo', symbol:'4', suit:'Diamonds', color:'#fe0000', value: 3},
        {name:'4 Kier', symbol:'4', suit:'Hearts', color:'#fe0000', value: 3},
        {name:'4 Pik', symbol:'4', suit:'Spades', color:'#000000', value: 3},
        {name:'3 Trefl', symbol:'3', suit:'Clubs', color:'#000000', value: 2},
        {name:'3 Karo', symbol:'3', suit:'Diamonds', color:'#fe0000', value: 2},
        {name:'3 Kier', symbol:'3', suit:'Hearts', color:'#fe0000', value: 2},
        {name:'3 Pik', symbol:'3', suit:'Spades', color:'#000000', value: 2},
        {name:'2 Trefl', symbol:'2', suit:'Clubs', color:'#000000', value: 1},
        {name:'2 Karo', symbol:'2', suit:'Diamonds', color:'#fe0000', value: 1},
        {name:'2 Kier', symbol:'2', suit:'Hearts', color:'#fe0000', value: 1},
        {name:'2 Pik', symbol:'2', suit:'Spades', color:'#000000', value: 1}
      ]
    }
  }

  render() {
    return (
      <AppContainer>
         {/*<Card selectedCard={this.state.cards[4]}/> */} 
          <SelectCard Cards={this.state.cards}/>
      </AppContainer>
    );
  }
}

export default App;
