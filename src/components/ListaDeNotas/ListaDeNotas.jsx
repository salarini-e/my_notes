import { Component } from "react";
import CardNota from "../CardNota";
import "./style.css"

class ListaDeNotas extends Component{
    render(){
        return(
        <ul className="lista-de-notas">
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                return (
                    <li className="lista-de-notas-item" key={index}>

                        <CardNota />
                    </li>
                );
            })}
        </ul>
        )
    }
}

export default ListaDeNotas;