/* eslint-disable import/no-anonymous-default-export */ 
import React from "react"
import Card from "./Card"

export default props => {

    const { min, max } = props 

    return(
        <Card title="Soma dos Números" blue> 
            <div className="Intervalo">
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min)}</strong>
                </span> 
            </div>
        </Card>
    )
}