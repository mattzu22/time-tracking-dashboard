import { DataContext } from "./dataContext";
import { useEffect, useState } from "react";

export default function ContextWrapper({ children }) {
  const [activities, setActivities] = useState([]);

  const [filtered, setFiltered] = useState('daily');

    const fetchData = async () => {
    const url = 'https://api-vercel-ivory.vercel.app/api'
    const resposta = await fetch(url)
    const json = await resposta.json()

    setActivities(
      json
    )
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  

  
  return (
    <DataContext.Provider value={{ activities, filtered, setFiltered }}>
      {children}
    </DataContext.Provider>
  );
}
