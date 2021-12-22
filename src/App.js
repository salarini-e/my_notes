import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas'
import "./assets/App.css"

class App extends Component{
  render(){
    return (
      <section className='container'>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  } 
}

export default App;
