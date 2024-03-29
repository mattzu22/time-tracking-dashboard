import { DataContext } from "./dataContext";
import { useEffect, useState } from "react";
import data from '../../data.json'

export default function ContextWrapper({ children }) {
  const [activities, setActivities] = useState([]);

  const [filtered, setFiltered] = useState('daily');

  useEffect(() => {
    setActivities(data)
  }, []);
  

  
  return (
    <DataContext.Provider value={{ activities, filtered, setFiltered }}>
      {children}
    </DataContext.Provider>
  );
}
