import data from '../../../data.json'
import { useEffect, useState } from "react";
import { AsideInfo } from "../AsideInfo";
import { Cards } from "../Cards";
import "./style.sass";

export const MainContent = () => {
    // const [works, setWork] = useState({
    //     title: ''
    // })

    // const fecthData = () =>{
    //     data.map(data =>{
    //     setWork({
    //         title: data.title
    //     })
    // })}

    // useEffect(() =>{
    //     fecthData()
    // }, [])

    
  return (
    <main className="dashboard">
      <AsideInfo />
      <Cards />
    </main>
  );
};
