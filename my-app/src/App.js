import './App.css';
import Eventos from './componentes/Eventos';
import Form from './componentes/Form';

function App() {

  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Eventos num={1}/>
      <Eventos num={2}/>
      <Form/>
    </div>
  );
}

export default App;
