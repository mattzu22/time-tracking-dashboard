import { AsideInfo } from "../AsideInfo"
import { Card } from "../Card"
import './style.sass'

export const MainContent = () =>(
    <main className="dashboard">
        <AsideInfo />
        <Card />
    </main>
)

