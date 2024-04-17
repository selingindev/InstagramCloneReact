
export default function Post(props) {
  return (
      <div className="cardPost">
          <div className="cardHeader">
              <h3>{props.title}</h3>
          </div>
          <div className="cardBody">
              <img src={props.imgSrc} />
              <p>{props.body}</p>
          </div>
          <div className="card-footer">
              
          </div>
      </div>
  )
}