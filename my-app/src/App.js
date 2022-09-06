import './App.css';
import SayMyName from './componentes/SayMyName';
import Pessoa from './componentes/Pessoa';

function App() {
  const name = "Sandson"
  return (
    <div className="App">
      
      < SayMyName nome="Sandson"/>
      < SayMyName nome = {name}/>
      < Pessoa 
        nome={name}
        idade="20" 
        profissao="Progamador" 
        imagem="https://static.escolakids.uol.com.br/2022/03/vertice-lado-diagonal-angulo-quadrado.jpg"
        />
    </div>
  );
}

export default App;
