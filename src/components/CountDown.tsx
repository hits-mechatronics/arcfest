import { useEffect, useState } from "react";
import TimeLabel from "./TimeLabel";

interface props {
  eventOn: string;
}

const CountDown: React.FC<props> = ({ eventOn }) => {
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timestamp = new Date(eventOn).getTime();
    const now = new Date().getTime();
    const countdown = timestamp - now;

    setDate({
      days: Math.floor(countdown / (1000 * 60 * 60 * 24)),
      hours: Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((countdown % (1000 * 60)) / 1000),
    });
  });

  return (
    <div className="flex-col items-center justify-center absolute top-0 p-4">
      <div className="text-center tracking-[1rem] relative top-2 font-semibold w-full opacity-75">
        COMING SOON
      </div>
      <div className=" gap-10 text-center flex">
        <TimeLabel val={date.days} type="days" />
        <TimeLabel val={date.hours} type="hours" />
        <TimeLabel val={date.minutes} type="minutes" />
        <TimeLabel val={date.seconds} type="seconds" />
      </div>
    </div>
  );
};

export default CountDown;
