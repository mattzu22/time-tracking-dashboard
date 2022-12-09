import { useState } from 'react'
import Avatar from '../../images/image-jeremy.png'
import './style.sass'
import api from '../../../data.json'

export const AsideInfo = () =>{

    // const [day, setDay] = useState({
    //     daily: '',
    //     current: '',
    //     previous: ''
        
    // })

    // const fetchData = ()=>{
    //     setDay({})
    // }
  
    return(
        <aside className="about-me">
        <div className="info">
            <img src={Avatar} alt="imagem do Jeremy" />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
        </div>
        
        <div className="navegation">
            <a>Daily</a>
            <a>Weekly</a>
            <a>Monhtly</a>
        </div>
    </aside>
    )
}
