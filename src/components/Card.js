import React, { Component } from 'react';
import styled from 'styled-components'


const StyledCard = styled.div`
    color: ${({suit}) => suit==='Spades' || suit==='Clubs' ? '#000000' : '#fe0000' };
    background-color: grey;
    width: calc(63px * 4);
    height: calc(89px * 4);    
    box-shadow: 3px 3px 7px rgba(0,0,0,0.3);
    border-radius: 10px;
    background: #ffffff;
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
        'top-left-symbol main main main .' 
        '. main main main .'
        '. main main main .'
        '. main main main bottom-right-symbol'
`
const TopLeftSymbol = styled.div`
    grid-area: top-left-symbol;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
`
const SymbolContener = styled.div`
    grid-area: main;
`
const BottomRightSymbol = styled.div`
    grid-area: bottom-right-symbol;
    justify-self: center;
    align-self: center;
    transform: rotateZ(180deg);
`
const Symbol = styled.p`
    font-size: 3rem;
    margin: 0;
`
const SymbolTitle = styled.p`
    font-size: 1rem;
    margin: 0;
    text-align:center;
`

class Card extends Component {

render() {
    const suit = this.props.selectedCard.suit;
    const symbol = this.props.selectedCard.symbol;
    var suitSymbol = '';

    switch(suit) {
        case 'Clubs':
            suitSymbol = "♣"
            break;
        case 'Diamonds':
            suitSymbol = '♦'
            break;
        case 'Hearts':
            suitSymbol = "♥"
            break;    
        case 'Spades':
            suitSymbol = "♠"
            break;
        default:
            suitSymbol = ''
    }




    return (
       <StyledCard suit={suit}>
            <TopLeftSymbol><Symbol>{suitSymbol}</Symbol><SymbolTitle>{symbol}</SymbolTitle></TopLeftSymbol>
            <SymbolContener></SymbolContener>
            <BottomRightSymbol><Symbol>{suitSymbol}</Symbol><SymbolTitle>{symbol}</SymbolTitle></BottomRightSymbol>
       </StyledCard>
    );
    }
}

export default Card;