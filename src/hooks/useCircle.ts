import { useState, useEffect } from "react";

export interface StopType {
  stop: boolean;
}

export const useCircle = (diameter: number) => {
  const [state, setState] = useState<number>(0);
  const [stop, setStop] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!stop) setState((state + 5) % 361);
    }, 2000);
  }, [state, stop]);

  const radius = diameter / 2;
  const toRadians = (degrees: number) => {
    const pi = Math.PI;
    return degrees * (pi / 180);
  };
  const circleXY = (angle: number) => {
    const x = Math.cos(toRadians(angle)) * radius;
    const y = Math.sin(toRadians(angle)) * radius;
    return [x, y] as const;
  };
  return [state, circleXY, stop, setStop] as const;
};
