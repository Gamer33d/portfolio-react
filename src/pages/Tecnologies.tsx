import { useState } from 'react'
import { tecnologies } from '../db/tecnologies'

import reactLogo from '../assets/images/react_logo.svg'
import tecnologyBack from '../assets/images/tecnologias_back.svg'
import arrowImage from '../assets/images/arrow.svg'
import askSymbol from '../assets/images/askSymbol.svg'

import '../styles/tecnologies.scss'



export function Tecnologies(){
    const [tecIndex, setTecIndex] = useState(0)
    const { name, logo, myKnowledge } = tecnologies[tecIndex]

    function handleChangeTecnology(){
        if(tecIndex >= (tecnologies.length - 1)){
            return setTecIndex(0)
        }
        let newIndex = tecIndex + 1
        if(!tecnologies[newIndex].logo) return tecnologies[newIndex].logo = askSymbol
        setTecIndex(newIndex)
    }
    

    return(
        <div id="page-tecnologies">
            <div className="content">
                <div className="page-title">
                    <h1>Tecnologias</h1>
                    <div className="line"></div>

                </div>
                <section className='tecnology-card'>
                        <img src={logo} alt='tecnology logo'/>
                        <div className="information">
                            <h1>{name}</h1>
                            <p>{myKnowledge}</p>
                            <img src={arrowImage} alt="proxima tecnologia" onClick={handleChangeTecnology}/>
                        </div>
                </section>
            </div>
            <aside>
                <img src={tecnologyBack} alt="tenology img" />
            </aside>
        </div>
    )
}