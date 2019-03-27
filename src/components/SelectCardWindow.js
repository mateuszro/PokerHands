import React, { Component } from 'react';
import styled from 'styled-components'
//import posed, { PoseGroup } from 'react-pose';

import Card from './Card'





const ModalWindow = styled.div`
    position : absolute;
    width: 100%;
    height: 100vh;
    background-color: grey;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`

class SelectCard extends Component {
    render() {
        var cards = this.props.Cards;

        return(
            <ModalWindow>

                    {cards.map( x =>{
                        return <Card key={x.name} selectedCard={x} />
                    })}

            </ModalWindow>
        )
    };
}

export default SelectCard
