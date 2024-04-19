export default function Post(props) {
  return (
      <div className="cardPost">
          <div className="cardHeader">
            <div className="leftHeaderFoto"> 
                <div className="containerFoto">
                    <img src={props.fotoUser} alt="Foto do usúario na postagem"/>
                </div>      
                <div className="containerUser">
                    <h3>{props.title}</h3>
                </div>
             </div>
             <div className="rightHeaderFoto">

             </div>
          </div>
          <div className="cardBody">
            <div className="containerFoto">
              <img src={props.imgPostagem} />
            </div>
            <div className="interacoesPostagem">
                <div className="containerButtons">
                    <div className="leftButtons">

                    </div>
                    <div className="rightButtons">

                    </div>
                </div>
                <div className="curtidoInfo">
                    <p>{}</p>
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