import { useState, useEffect } from "react";

export interface StopType {
  stop: boolean;
}

interface PropsType {
  diameter?: number;
}

export const useCircle = ({ diameter = 500 }: PropsType) => {
  const [state, setState] = useState<number>(0);
  const [stop, setStop] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!stop) setState((state + 10) % 361);
    }, 1000);
  }, [state, stop]);

  const radius = diameter / 2;
  const toRadians = (degrees: number) => {
    const pi = Math.PI;
    return degrees * (pi / 180);
  };
  const circleXY = (angle: number) => {
    const moveSkillSize = diameter / 2 - 42;
    const x = Math.cos(toRadians(angle)) * radius + moveSkillSize;
    const y = Math.sin(toRadians(angle)) * radius + moveSkillSize;
    return [x, y] as const;
  };
  return [state, circleXY, stop, setStop] as const;
};
