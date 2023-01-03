import { useEffect, useState } from "react";
import eventData from "../json/events.json";

interface props {
  event: string;
}
const EventCard: React.FC<props> = ({ event }) => {
  const [currEvent, setCurrEvent] = useState<typeof eventData[0]>({
    desc: "",
    icon: "",
    img: "",
    name: "",
  });

  useEffect(() => {
    eventData.forEach((item) => {
      if (event === item.name) {
        setCurrEvent(item);
      }
    });
  }, []);

  return (
    <div
      className="bg-cyan-900 h-5/6 w-5/6 absolute top-1/6 flex flex-col items-center overflow-scroll rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={currEvent.img}
        alt="banner"
        className="opacity-75 w-full h-1/4"
      />
      <div className="relative -top-12 flex flex-col items-center">
        <img src={currEvent.icon} className="w-[100px]" />
        <h1 className="font-black text-3xl">{currEvent.name}</h1>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center absolute top-1/2">
        <h3 className="text-center w-3/5">{currEvent.desc}</h3>
        <div className="w-full flex flex-col gap-5 items-stretch md:flex-row md:justify-around">
          <a
            download={"rulebook_arc.pdf"}
            href="/RuleBook.pdf"
            className="bg-slate-900 rounded-full min-w-[200px] px-4 py-3 text-center"
          >
            Rule Book
          </a>
          <a
            href=""
            className="bg-slate-900 rounded-full min-w-[200px] px-4 py-3 text-center"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
