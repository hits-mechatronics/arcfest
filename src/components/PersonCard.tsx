interface props {
  imgsrc: string;
  name: string;
  number: string;
}
const PersonCard: React.FC<props> = ({ imgsrc, name, number }) => {
  return (
    <div className="backdrop-filter backdrop-blur-[2px] text-cyan-500 flex flex-col items-center">
      <img src={imgsrc} alt={name} className="w-[100px] rounded-full" />
      <h1 className="text-xl opacity-95">{name}</h1>
      <h2 className="text-lg opacity-90">{number}</h2>
    </div>
  );
};

export default PersonCard;
