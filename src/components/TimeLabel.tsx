interface props {
  type: "days" | "hours" | "minutes" | "seconds";
  val: number;
}

const TimeLabel: React.FC<props> = ({ type, val }) => {
  return (
    <>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="text-3xl">
          <span>{val}</span>
        </span>
        {type}
      </div>
    </>
  );
};

export default TimeLabel;
