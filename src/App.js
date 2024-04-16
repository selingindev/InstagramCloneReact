import logo from './logo.svg';
import './App.css';
import Esquerda from '../src/componentes/ladoEsquerdo/ConteudoLateralEsquerda';
import Central from '../src/componentes/centro/ConteudoCentral'
function App() {
  return (
    <>
      <Esquerda />
 
     <Central/>

      
      <div className='conteudoLateralDireita'>
        {/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados
          Link legais
        */}
      </div>
    </>
  );
}

export default App;
