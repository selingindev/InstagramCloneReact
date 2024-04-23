import  './Post.css'
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import Curtidas from './Curtidas';
import Pessoa1 from './../../imagens/perfilCorinthians.jpg'
import Pessoa2 from './../../imagens/macacoSkatista.jpg'
import Pessoa3 from '../../imagens/perfilJojo.png'

export default function Post(props) {
  return (
      <div className="cardPost">
          <div className="cardHeader">
            <div className="leftHeaderPost"> 
                <div className="containerFotoUser">
                    <img src={props.fotoUser} alt="Foto do usúario na postagem"/>
                </div>      
                <div className="containerUser">
                    <h3>{props.title}</h3>
                    <h4>3 d</h4>
                </div>
             </div>
             <div className="rightHeaderPost">
             <AiOutlineEllipsis style={{width: '20px',
                    height: '20px', 
                    }} />
             </div>
          </div>
          <div className="cardBody">
            <div className="containerFoto">
              <img src={props.imgPostagem} />
            </div>
            <div className="interacoesPostagem">
                <div className="containerButtons">
                    <div className="leftButtons">
                        <FaRegHeart style={{
                            width:'20px',
                            height:'20px'
                        }} />
                        <div className='reverse'>
                        <FaRegComment style={{
                            width:'20px',
                            height:'20px'
                        }} />
                        </div>
                        <FaRegPaperPlane style={{
                            width:'20px',
                            height:'20px'
                        }}/>
                    </div>
                    <div className="rightButtons">
                        <FaRegBookmark style={{
                            width:'20px',
                            height:'20px'
                        }}/>
                    </div>
                </div>
                <div className="curtidoInfo">
                        <div className='fotoCurtida'>
                            <Curtidas fotoComentario={Pessoa1}/>
                            <Curtidas fotoComentario={Pessoa2}/>
                            <Curtidas fotoComentario={Pessoa3}/>
                        </div>
                    <p>Curtido por <span>SCCP</span> e <span>outras pessoas</span> </p>
                </div>
        
            </div>
          </div>
          <div className="card-footer">
            <div className="descPostagem">
                <h4>{}</h4>
                <p>{}</p>
            </div>
            <div className="comentarios">
                <div className="todosComentarios">
                    <p>{}</p>
                </div>
                <div className="seuComentario">
                    <div className="comentarioFoto">
                        <img src=''></img>
                    </div>
                    <div className="digiteAqui">
                        <p></p>
                    </div>
                <div/>
                <div className="horarioPost">
                    <p></p>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}