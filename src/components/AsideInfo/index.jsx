import { useState } from 'react'
import Avatar from '../../images/image-jeremy.png'
import './style.sass'
import api from '../../../data.json'

export const AsideInfo = () =>{

    const [day, setDay] = useState({
        daily: '',
        current: '',
        previous: ''   
    })

    const fetchData = () =>{
        api.map(element =>{
            setDay({
                daily: element.title,
                current: element.timeframes.daily.current,
                previous: element.timeframes.daily.previous
            })
            
        })
    }
  
    return(
        <aside className="about-me">
        <div className="info">
            <img src={Avatar} alt="imagem do Jeremy" />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
        </div>
        
        <div className="navegation">
            <a onClick={fetchData}>Daily</a>
            <a>Weekly</a>
            <a>Monhtly</a>
        </div>
    </aside>
    )
}
