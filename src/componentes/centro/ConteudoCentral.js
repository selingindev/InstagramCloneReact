import Stories from "./Stories"
import Post from "./Post"
import './ConteudoCentral.css'
import Storie1 from '../../imagens/fallenPerfil.jpeg'
import Storie2 from '../../imagens/perfilCorinthians.jpg'
import Storie3 from '../../imagens//perfilJojo.png'


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
            <Stories fotoStorie = 'art'
            nomeStorie = 'SelinginSk8'/>
             <Stories fotoStorie = 'art'
            nomeStorie = 'SelinginSk8'/>
            <Stories fotoStorie = 'art'
            nomeStorie = 'SelinginSk8'/>
            
        </div>
        <div className="containerPost">   
            <Post/>
        </div>
    </div>
  )
}

export default ConteudoCentral