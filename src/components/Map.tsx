import people from "../json/coords.json";
import PersonCard from "./PersonCard";

const renderPerson = (type: string) => {
  const PersonList: JSX.Element[] = [];

  people.map((person, i) => {
    console.log(person.type, type, i);
    if (person.type === type) {
      console.log(person.type, type, i);

      PersonList.push(
        <PersonCard
          name={person.name}
          imgsrc={person.imgsrc}
          number={person.number}
          key={i}
        />
      );
    }
  });

  return PersonList;
};

const Map: React.FC = () => (
  <div className="h-[80%] overflow-scroll w-full flex flex-col justify-center items-center text-sm m-6">
    <div className="h-full w-full flex flex-col justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6540218634796!2d80.22410789999999!3d12.800955199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5250847d3353d7%3A0x6a585af1f362dadb!2sHindustan%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1671793568970!5m2!1sen!2sin"
        className="w-3/4 h-4/5 min-w-[360px] min-h-[120px] md:w-1/2 md:h-1/2 m-2"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>you can find us here</p>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="text-2xl m-6">staff co-ordinators</h1>
      {renderPerson("staff")}
    </div>
    <div className="flex flex-col items-center">
      <h1 className="text-2xl m-6">student co-ordinators</h1>
      <div className="grid grid-cols-2 md:flex md:flex-row gap-12">
        {renderPerson("student")}
      </div>
    </div>
    <div className="h-[300px] opacity-0"></div>
  </div>
);

export default Map;
