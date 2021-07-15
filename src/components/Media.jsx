/* eslint-disable import/no-anonymous-default-export */ 
import React from "react"
import Card from "./Card"

export default props => {

    const { min, max } = props  

    return(
        <Card title="Média dos Números" green> 
            <div className="Intervalo">
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span> 
            </div>
        </Card>
    )
}