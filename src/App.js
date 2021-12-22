import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas'
import "./assets/App.css"

class App extends Component{

  constructor(){
    super();
    this.state={
      notas: []
    }
  }

  criarNota(titulo, texto){
    const novaNota={titulo, texto};
    if(titulo!="" || texto!=""){
      const novoArrayNotas=[...this.state.notas, novaNota]
      const novoEstado={
        notas: novoArrayNotas
      }     
      this.setState(novoEstado)
    }
  }

  render(){
    return (
      <section className='container'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  } 
}

export default App;
