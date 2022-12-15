import { TypeAnimation } from "react-type-animation";
import CountDown from "./CountDown";
import RegisterInterest from "./RegisterInterest";

const Hero: React.FC = () => {
  return (
    <>
      <div className="h-screen p-6 flex flex-col justify-between items-center ">
        <CountDown timestamp={1695084460000} />
        <div className="flex flex-col items-center">
          <TypeAnimation
            speed={1}
            sequence={["ARC'23"]}
            wrapper="h1"
            cursor={false}
            className="text-6xl md:text-9xl font-titanOne"
          />
          <div className="flex gap-2 items-center">
            <svg
              className="fill-blue-100"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2c5.519 0 10 4.481 10 10s-4.481 10-10 10-10-4.481-10-10 4.481-10 10-10zm1.476 12.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z" />
            </svg>
            <a
              className="text-xs md:text-lg underline"
              href="https://goo.gl/maps/Kow1HRFeveGVLHAEA"
            >
              Hindustan Institute of Technology and Science, Padur
            </a>
          </div>
        </div>
        <RegisterInterest />
      </div>
    </>
  );
};

export default Hero;
