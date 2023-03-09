import "./style.sass";
import { Card } from "../Card";
import { useContext } from "react";
import { DataContext } from "../../context/dataContext";

export const Cards = () => {
  const { activities } = useContext(DataContext);

  return (
    <div className="cards">
      {activities.map((activity, index) => (
        <Card
          key={index}
          activity={activity}
        />
    ))}
    </div>
  );
};
