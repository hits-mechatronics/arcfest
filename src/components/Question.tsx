import { useState } from "react";

interface props {
  title: string;
  content: string;
}

const Question: React.FC<props> = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen((open) => !open);
  };

  return (
    <div className="min-w-[360px] w-10/12">
      <div
        className="w-full bg-gray-900 px-4 py-2 flex justify-between hover:cursor-pointer"
        onClick={(e) => handleClick(e)}
      >
        <span>{title}</span>
        <span className="font-black text-lg">{open ? "-" : "+"}</span>
      </div>
      {open ? (
        <div className="w-full backdrop-filter text-cyan-500 backdrop-blur-[4px] border border-cyan-900 px-4 py-2">
          {content}
        </div>
      ) : null}
    </div>
  );
};

export default Question;
