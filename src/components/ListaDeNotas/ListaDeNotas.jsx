import { Component } from "react";
import CardNota from "../CardNota";
import "./style.css"

class ListaDeNotas extends Component{

    render(){
        return(
        <ul className="lista-de-notas">
            {this.props.notas.map((nota, index) => {
                return (
                    <li className="lista-de-notas-item" key={index}>

                        <CardNota titulo={nota.titulo} texto={nota.texto}/>
                    </li>
                );
            })}
        </ul>
        )
    }
}

export default ListaDeNotas;