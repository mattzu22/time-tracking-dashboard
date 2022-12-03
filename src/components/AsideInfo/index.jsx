import Avatar from '../../images/image-jeremy.png'
import './style.sass'

export const AsideInfo = () =>(
    <aside className="about-me">
        <div className="info">
            <img src={Avatar} alt="imagem do Jeremy" />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
        </div>
        
        <div className="navegation">
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monhtly</p>
        </div>
    </aside>
)
