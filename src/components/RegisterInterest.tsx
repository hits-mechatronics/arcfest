import { useState } from "react";
import axios from "axios";

const RegisterInterest: React.FC = () => {
  const [email, setEmail] = useState<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post("/api/subscribe", {
      email,
    });
    console.log(res);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col justify-center items-center shadow-md p-4">
      register your interest
      <form
        className="min-w-[300px] w-[50vw] flex"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          value={email}
          onChange={(e) => handleChange(e)}
          type="email"
          className="p-1 w-[85%] m-2 text-blue-900"
          placeholder="enter your email"
        />
        <button className="shadow-md p-2 bg-indigo-900 rounded-md">
          Subscribe
        </button>
      </form>
      <p className="text-xs text-center">
        you'll recieve updates and announcements straight to your inbox
      </p>
    </div>
  );
};

export default RegisterInterest;
