"use client";

import React from 'react';
import Image from "next/image";
import styles from "../styles/events.module.css";

type PageProps = {
    text : string;
    imageName : string;
    id : number;
    handleClick: (id: number) => void;
    currentStatus? : string;

}

const EventButton:React.FC<PageProps> = ({handleClick, id, text, imageName, currentStatus}) => {
  return (
    <button  disabled= {currentStatus==="Close"} className={`flex justify-center items-center w-full rounded-l-3xl rounded-r-3xl font-bold text-xl bg-eventPrimary pt-5 pb-5  pl-8 pr-8 mb-10 ${styles.fontFamilyOfCTA}`} onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>
    {
        e.preventDefault();
        handleClick(id);
    }
    }>{(currentStatus==="Close") ?  "Sold Out!"  : text}
      {(currentStatus==="Open") && <Image className="ml-10" alt={imageName} src={`/${imageName}.png`} height={40} width={40}/>}
    </button>
  )
}

export default EventButton
