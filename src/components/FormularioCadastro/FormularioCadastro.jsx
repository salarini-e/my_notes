import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {
  
  constructor(props){
    super(props);
    this.titulo="";    
    this.texto=""
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation(); 
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation(); 
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation(); 
    this.props.criarNota(this.titulo, this.texto);
  }
  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <input type="text" onChange={this._handleMudancaTitulo.bind(this)} placeholder="Título" />
        <textarea rows={15} placeholder="Escreva sua nota..." onChange={this._handleMudancaTexto.bind(this)}/>
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;