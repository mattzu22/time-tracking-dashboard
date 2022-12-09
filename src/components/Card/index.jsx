import "./style.sass";
import Ellipsis from "../../images/icon-ellipsis.svg";

export const Card = ({img, id}) => (
  <div className="container-card">
    <div className="illustration-top" id={id}>
      <img src={img} alt="Work" />
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

