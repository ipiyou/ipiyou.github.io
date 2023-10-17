import { useState, useEffect } from "react";
import { ScrollFnType } from "../App";

export const useScroll = () => {
  const [scroll,setScroll] = useState<number>(0)
  useEffect(() => {
    const fn = () => {
      const {scrollTop,scrollHeight} = document.documentElement
      const height = scrollHeight / 4
      const cur = Math.floor((scrollTop + height-100) / height)
      if(scroll === cur) return; 
      setScroll(cur);

    }
    const id = setTimeout(() => document.addEventListener('scroll',fn),100)
    return () => {
      clearTimeout(id)
      document.removeEventListener('scroll',fn)
    } 
  },[scroll])
  return [scroll,setScroll] as const;
};
