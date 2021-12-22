import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input type="text" placeholder="Título" />
        <textarea rows={15} placeholder="Escreva sua nota..." />
        <button>Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;