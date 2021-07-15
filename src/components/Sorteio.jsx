/* eslint-disable import/no-anonymous-default-export */ 
import React from "react"
import Card from "./Card"

export default props => {
    
    const { min, max } = props 

    return(
        <Card title="Sorteio de um Número" purple> 
            <div className="Intervalo">
                <span>
                    <span>Resultado: </span>
                    <strong>{ (Math.random() * (max - min) + min).toFixed(2)}</strong>
                </span> 
            </div>
        </Card>
    )
}