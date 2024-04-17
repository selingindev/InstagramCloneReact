

import './ConteudoLateralDireita.css'
import SeuPerfil from './SeuPerfil'
import SugestoesPessoas from './SugestoesPessoas'
import InfoMeta from './InfosMeta'

function ConteudoLateralDireita() {
  return (
    <div className='ConteudoLateralDireita'>
        <div className='containerContentDireita'>
            <SeuPerfil/>
            <SugestoesPessoas/>
            <InfoMeta/>
        </div>
    </div>
  )
}

export default ConteudoLateralDireita