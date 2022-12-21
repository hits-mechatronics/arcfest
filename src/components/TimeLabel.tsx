interface props {
  type: "DD" | "HH" | "MM" | "SS";
  val: number;
}

const TimeLabel: React.FC<props> = ({ type, val }) => {
  return (
    <>
      <div className="flex flex-col bg-neutral rounded-box text-neutral-content text-sm md:text-xl">
        <span>{val}</span>
        {type}
      </div>
    </>
  );
};

export default TimeLabel;
