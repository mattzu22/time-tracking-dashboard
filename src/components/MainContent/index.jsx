import { AsideInfo } from "../AsideInfo"
import { Cards } from "../Cards"
import './style.sass'

export const MainContent = () =>(
    <main className="dashboard">
        <AsideInfo />
        <Cards />
    </main>
)

