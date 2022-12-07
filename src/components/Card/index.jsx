import "./style.sass";
import Ellipsis from "../../images/icon-ellipsis.svg";
import Work from "../../images/icon-work.svg";

export const Card = () => {
  return (
    <div className="container-card">
      <div className="illustration-top">
        <img src={Work} alt="Work" />
      </div>
      <div className="card">
        <div className="type">
          <p>Work</p>
          <img
            src={Ellipsis}
            alt="Três 
        pontinhos"
          />
        </div>
        <div className="info-card">
          <p className="d-w-m">32hrs</p>
          <p>Last Week - 5hrs</p>
        </div>
      </div>
    </div>
  );
};
