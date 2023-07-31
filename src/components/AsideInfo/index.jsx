import { useContext, useState } from 'react'
import Avatar from '../../../public/images/image-jeremy.png'
import './style.sass'
import { DataContext } from '../../context/dataContext'

export const AsideInfo = () =>{
    const { setFiltered } = useContext(DataContext);
    
    return(
        <aside className="about-me">
        <div className="info">
            <img src={Avatar} alt="imagem do Jeremy" />
            <div>
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
        </div>
        
        <div className="navegation">
            <a onClick={() => setFiltered('daily')}>Daily</a>
            <a onClick={() => setFiltered('weekly')}>Weekly</a>
            <a onClick={() => setFiltered('monthly')}>Monhtly</a>
        </div>
    </aside>
    )
}
