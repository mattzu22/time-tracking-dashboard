import { AsideInfo } from "../AsideInfo";
import { Cards } from "../Cards";
import "./style.sass";

export const MainContent = () => {  
  return (
    <main className="dashboard">
      <AsideInfo />
      <Cards />
    </main>
  );
};
