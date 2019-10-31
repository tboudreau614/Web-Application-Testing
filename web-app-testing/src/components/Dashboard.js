import React from 'react'
import styled from 'styled-components'

export default function Dashboard(props) {
    const Button = styled.button`
    width: 100px;
    background-color: white;
    height: 100px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 100%;
    `
    const Buttons = styled.div`
        width: 90%;
        margin-left: 5%;
        background-color: dodgerblue;
        display: flex;
        justify-content: space-around
    `
  return (
    <Buttons>
        <Button className="buttonStyle" onClick={props.hit}>Hit</Button>
        <Button className="buttonStyle" onClick={props.strike}>Strike</Button>
        <Button className="buttonStyle" onClick={props.ball}>Ball</Button>
        <Button className="buttonStyle" onClick={props.foul}>Foul</Button>
    </Buttons>
  )
} 