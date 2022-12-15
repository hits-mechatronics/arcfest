import { useEffect, useState } from "react";
import moment from "moment";

interface props {
  timestamp: number;
}

const CountDown: React.FC<props> = ({ timestamp }) => {
  const [date, setDate] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const now = new Date().getTime();
    const countdown = moment(now - timestamp);

    // const moonLanding = new Date("April 19, 2023 20:17:40 GMT+00:00");
    // console.log(moonLanding.getTime());

    const months = countdown.format("M");
    // console.log(months);

    setDate({
      days: parseInt(countdown.format("D")),
      hours: parseInt(countdown.format("HH")),
      months: parseInt(countdown.format("M")),
    });
  }, []);

  return (
    <div className="flex-col items-center justify-center">
      <div className="text-center font-titanOne">Coming Soon</div>
      <div className=" gap-10 text-center flex">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="text-3xl">
            <span>{date.months}</span>
          </span>
          months
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="text-3xl">
            <span>{date.days}</span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="text-3xl">
            <span>{date.hours}</span>
          </span>
          hours
        </div>
      </div>
    </div>
  );
};

export default CountDown;
