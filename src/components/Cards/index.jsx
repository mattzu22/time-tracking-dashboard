import "./style.sass";
import { Card } from "../Card";
import work from "../../images/icon-work.svg";
import exercise from "../../images/icon-exercise.svg";
import play from "../../images/icon-play.svg";
import self from "../../images/icon-self-care.svg";
import social from "../../images/icon-social.svg";
import study from "../../images/icon-study.svg";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/dataContext";

export const Cards = () => {
  const { activities } = useContext(DataContext);

  return (
    <div className="cards">
      {activities.map((activity) => (
        <Card
          img={work}
          id={activity.title}
          timeCurrent={activity.timeframes.daily.current}
          timePrevious={activity.timeframes.daily.previous}
        />
      ))}
    </div>
  );
};
