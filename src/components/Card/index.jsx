import "./style.sass";
import Ellipsis from "../../images/icon-ellipsis.svg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/dataContext";
import work from '../../images/icon-work.svg';

export const Card = ({ activity }) => {

  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");

  const { filtered } = useContext(DataContext);

  useEffect(() => {
    if (filtered === "daily") {
      setPrevious(activity.timeframes.daily.previous);
      setCurrent(activity.timeframes.daily.current);
    } else if (filtered === "weekly") {
      setPrevious(activity.timeframes.weekly.previous);
      setCurrent(activity.timeframes.weekly.current);
    } else {
      setPrevious(activity.timeframes.monthly.previous);
      setCurrent(activity.timeframes.monthly.current);
    }
  }, [filtered]);

  return (
    <div className="container-card">
      <div className="illustration-top" style={{background: activity.color}} id={activity.title}>
        <img src={activity.img} alt={activity.title} />
      </div>
      <div className="card">
        <div className="type">
          <p>{activity.title}</p>
          <img
            src={Ellipsis}
            alt="Três
            pontinhos"
          />
        </div>
        <div className="info-card">
          <p className="d-w-m">{current}hrs</p>
          <p>Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
};
