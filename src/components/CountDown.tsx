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

    setTimeout(() => {
      setDate({
        days: Math.floor(countdown / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((countdown % (1000 * 60)) / 1000),
      });
    }, 1000);
  });

  return (
    <div className="flex-col items-center justify-center">
      <div className="text-center tracking-[1.5rem] relative top-9 md:top-10 -z-10 text-cyan-500 font-semibold opacity-75 text-xs md:text-base">
        COMING SOON
      </div>
      <div className=" gap-10 text-center flex justify-center items-center">
        <TimeLabel val={date.days} type="DD" />
        <TimeLabel val={date.hours} type="HH" />
        <TimeLabel val={date.minutes} type="MM" />
        <TimeLabel val={date.seconds} type="SS" />
      </div>
    </div>
  );
};

export default CountDown;
