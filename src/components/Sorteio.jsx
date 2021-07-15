/* eslint-disable import/no-anonymous-default-export */ 
import React from "react"
import Card from "./Card"

export default props => {
     

    return(
        <Card title="Sorteio de um Número" purple> 
            <div className="Intervalo">
                <span>
                    <span>Resultado: </span>
                    <strong>19</strong>
                </span> 
            </div>
        </Card>
    )
}