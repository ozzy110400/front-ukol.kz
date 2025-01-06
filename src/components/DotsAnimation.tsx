import { Typography } from "@mui/material";
import { useEffect, useState } from "preact/hooks";

export const DotsAnimation = () => {
    const [dots, setDots] = useState('');
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
  
    return <span>{dots}</span>; 
  };