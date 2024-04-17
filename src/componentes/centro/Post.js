
export default function Post(props) {
  return (
      <div className="card post">
          <div className="card-header">
              <h3>{props.title}</h3>
          </div>
          <div className="card-body">
              <img src={props.imgSrc} />
              <p>{props.body}</p>
          </div>
          <div className="card-footer">
              
          </div>
      </div>
  )
}