import Stories from "./Stories"
import Post from "./Post"
import './ConteudoCentral.css'

function ConteudoCentral () {
  return (
    <div className="conteudoCentral">
        <div className="containerStories">
            <Stories/>
        </div>
        <div className="containerPost">   
            <Post/>
        </div>
    </div>
  )
}

export default ConteudoCentral