import "./style.sass";
import Ellipsis from "../../images/icon-ellipsis.svg";

export const Card = ({id, img, timeCurrent, timePrevious}) => (
  <div className="container-card">
    <div className="illustration-top" id={id}>
      <img src={img} alt={id} />
    </div>
      <div className="card">
        <div className="type">
          <p>{id}</p>
          <img
            src={Ellipsis}
            alt="Três
            pontinhos"
          />
        </div>
        <div className="info-card">
          <p className="d-w-m">{timeCurrent}hrs</p>
          <p>Last Week - {timePrevious}hrs</p>
        </div>
      </div>
  </div>
);

