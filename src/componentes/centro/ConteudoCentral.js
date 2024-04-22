import Stories from "./Stories"
import Post from "./Post"
import './ConteudoCentral.css'
import Storie1 from '../../imagens/fallenPerfil.jpeg'
import Storie2 from '../../imagens/perfilCorinthians.jpg'
import Storie3 from '../../imagens/perfilJojo.png'
import Storie4 from "../../imagens/Captura de tela_20230404_004053.png"
import Storie5 from '../../imagens/chorao.JPG'
import Storie6 from '../../imagens/Captura de tela_20230705_203658.png'
import Storie7 from '../../imagens/macacoSkatista.jpg'
function ConteudoCentral () {
  return (
    <div className="conteudoCentral">
        <div className="containerStories">
            <Stories fotoStorie = {Storie1}
            nomeStorie = 'Fallen'
            />
            <Stories fotoStorie = {Storie2}
            nomeStorie = 'SCCP'/>
            <Stories fotoStorie = {Storie3}
            nomeStorie = 'JojoWorld'/>
            <Stories fotoStorie = {Storie4}
            nomeStorie = 'FUNKiROCK'/>
             <Stories fotoStorie = {Storie5}
            nomeStorie = 'Chorãozinho'/>
            <Stories fotoStorie = {Storie6}
            nomeStorie = 'SCPBoyz'/>    
            <Stories fotoStorie = {Storie7}
            nomeStorie = 'monkeySK8'/>    
        </div>
        <div className="containerPost">   
            <Post fotoUser={Storie1} title='Fallen'/>
        </div>
    </div>
  )
}

export default ConteudoCentral