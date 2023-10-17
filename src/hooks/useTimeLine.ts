import { useState } from "react";

const dateToNumber = (date: string) => date.split(".").map(Number);

export const useTimeLine = (dates: string[]) => {
  const [state, setState] = useState<number>(0);
  const [date, setDate] = useState<number>(0);

  const moveNearDate = (nextDate: string) => {
    const [year, month] = dateToNumber(dates[0]);
    const [nextYear, nextMonth] = dateToNumber(nextDate);
    const twoSecond = (nextYear - year) * 12 + (nextMonth - month);
    setDate(twoSecond);
  };

  const moveNext = (num: number) => {
    if (num >= dates.length || num < 0) return;
    setState(num);
    moveNearDate(dates[num]);
  };

  return [state, moveNext, date] as const;
};
