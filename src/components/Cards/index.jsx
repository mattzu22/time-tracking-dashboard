import { Card } from "../Card";

export const Cards = () => {
  return (
    <div className="cards" style={{display: 'flex', flexWrap: 'wrap', gap: '2rem',  maxWidth: '550px'}}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
