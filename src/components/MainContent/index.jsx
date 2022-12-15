import ContextWrapper from "../../context/contextWrapper";
import { AsideInfo } from "../AsideInfo";
import { Cards } from "../Cards";
import "./style.sass";

export const MainContent = () => {
  return (
    <ContextWrapper>
      <main className="dashboard">
        <AsideInfo />
        <Cards />
      </main>
    </ContextWrapper>
  );
};
