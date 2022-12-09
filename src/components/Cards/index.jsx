import "./style.sass";
import { Card } from "../Card";
import work from "../../images/icon-work.svg";
import exercise from "../../images/icon-exercise.svg";
import play from "../../images/icon-play.svg";
import self from "../../images/icon-self-care.svg";
import social from "../../images/icon-social.svg";
import study from "../../images/icon-study.svg";

export const Cards = () => {
  return (
    <div className="cards" >
      <Card img={work} id='work' />
      <Card img={play} id='play' />
      <Card img={study} id='study' />
      <Card img={exercise} id='exercise' />
      <Card img={social} id='social' />
      <Card img={self} id='self' />
    </div>
  );
};
