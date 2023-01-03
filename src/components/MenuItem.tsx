interface props {
  icon: string;
  name: string;
  setItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const handleClick = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  eventName: string,
  setItem: React.Dispatch<React.SetStateAction<string | null>>
) => {
  e.stopPropagation();
  setItem(eventName);
};

const MenuItem: React.FC<props> = ({ icon, name, setItem }) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center flex-1 text-center opacity-75 hover:opacity-100 hover:bg-slate-900 py-3 rounded-lg"
        onClick={(e) => handleClick(e, name, setItem)}
      >
        <img src={icon} alt="icon" className="w-1/2" />
        <h1 className="font-black text-xl">{name}</h1>
      </div>
    </>
  );
};

export default MenuItem;
