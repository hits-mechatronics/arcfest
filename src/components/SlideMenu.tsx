import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import EventCard from "./EventCard";

interface menuItem {
  icon: string;
  name: string;
}
interface props {
  menu: menuItem[];
}

const renderMenu = (
  menu: menuItem[],
  setEvent: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const itemList: JSX.Element[] = [];

  menu.map((item, i) => {
    itemList.push(
      <MenuItem key={i} icon={item.icon} name={item.name} setItem={setEvent} />
    );
  });

  return itemList;
};

const SlideMenu: React.FC<props> = ({ menu }) => {
  const [currEvent, setEvent] = useState<string | null>(null);

  return (
    <>
      <div
        className="w-full h-full overflow-scroll flex flex-col md:flex-row gap-10 items-center justify-center px-20"
        onClick={(e) => setEvent(null)}
      >
        {renderMenu(menu, setEvent)}
        {currEvent ? <EventCard event={currEvent} /> : null}
      </div>
    </>
  );
};

export default SlideMenu;
