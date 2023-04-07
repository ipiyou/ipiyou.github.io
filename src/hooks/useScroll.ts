import { useRef, useEffect } from "react";
import { ScrollFnType } from "../App";

export const useScroll = (setScroll: ScrollFnType, to: number) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleScroll = (e: WheelEvent) => {
    const { current } = ref;
    if (!current) return;
    const scrollHeight = current.scrollHeight;
    const scrollTop = current.scrollTop;
    const clientHeight = current.clientHeight;

    const mouseDown = e.deltaY > 0;
    const mouseUp = e.deltaY < 0;
    if (mouseDown && to < 4 && scrollTop + clientHeight >= scrollHeight - 1) {
      setScroll(to);
    } else if (mouseUp && to - 2 >= 0 && scrollTop === 0) {
      setScroll(to - 2);
    }
  };
  useEffect(() => {
    const { current } = ref;
    if (!current) return;
    current.addEventListener("wheel", handleScroll);
    return () => current.removeEventListener("wheel", handleScroll);
  }, []);
  return ref;
};
