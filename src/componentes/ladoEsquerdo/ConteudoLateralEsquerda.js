import logo from '../../imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css';
import { GoHomeFill } from "react-icons/go";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { FaThreads } from "react-icons/fa6";


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <div className='contentEsquerda'>
                <div className='containerLogo'>
                     <img src={logo} className="logo"/>
                </div>
                <ul className='contentMenu'>
                    <Menu icone={<GoHomeFill
                    style={{width: '25px',
                    height: '25px',
                    margin:' 0 1em',   
                    }} />}nome="Página inicial" classe ='text-menu'/>

                    <Menu  icone={<CiSearch
                    style={{width: '25px',
                    height: '25px',
                    margin:' 0 1em',   
                    }} />} nome="Pesquisa"  classe ='text-menu' />

                    <Menu  icone={<FaRegCompass 
                    style={{width: '25px',
                    height: '25px',
                    margin:' 0 1em',   
                    }} />} nome="Explorar"  classe ='text-menu' />

                    <Menu  icone={<PiVideoFill
                    style={{width: '25px',
                    height: '25px',
                    margin:' 0 1em',   
                    }} />} nome="Reels"  classe ='text-menu'/>
                    
                    <Menu  icone={<RiMessengerLine
                    style={{width: '25px',
                    height: '25px', 
                    margin:' 0 1em',                     
                    }} />} nome="Mensagens"  classe ='text-menu'/>

                    <Menu icone={< CiHeart
                    style={{width:'25px',
                    height: '25px',
                    margin:' 0 1em',   
                    }} />} nome="Notificações"  classe ='text-menu'/>
                    
                    <Menu icone={<CgAddR
                    style={{width: '25px',
                    height: '25px',
                    margin:' 0 1em',   
                    }} />} nome="Criar"  classe ='text-menu'/>

                    <Menu icone={<FaUserCircle
                    style={{width: '25px',
                    height: '25px',
                    margin:' 0 1em',   
                    }} />}  nome="Profile"  classe ='text-menu'/>  
                </ul>

                <div className='configContainer'>
                    <Menu  icone={<FaThreads 
                    style={{width: '25px',
                    height: '25px',
                    margin:' 0  1em',   
                    }} />}  nome="Threads"  classe ='text-menu'/> 

                    <Menu  icone={<AiOutlineMenu 
                    style={{width: '25px',
                    height: '25px',
                    margin:' 0 1em',   
                    
                    }} />}  nome="Mais"  classe ='text-menu'/>                
                </div>
            </div>    
        </div>
        
    )
}

// export default ConteudoLateralEsquerda;