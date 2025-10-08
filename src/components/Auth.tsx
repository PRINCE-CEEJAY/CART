import { useState } from "react";
type AuthProps = {
  BtnValue: string;
};
export type User = {
  email: string;
  password: string;
};

const Auth = ({ BtnValue }: AuthProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted");
  };
  const [user, setUser] = useState<User>({ email: "", password: "" });
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-3 justify-center items-center bg-gray-700 "
    >
      <input
        placeholder="Enter your Email"
        value={user.email}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, email: e.target.value }))
        }
        className="bg-amber-300 rounded-md p-2 text-black w-full"
      />
      <input
        placeholder="Enter your Password"
        value={user.password}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, password: e.target.value }))
        }
        className="bg-amber-300 rounded-md p-2 text-black w-full"
      />
      <button
        type="submit"
        className="bg-green-800 text-white px-3 py-1 font-bold rounded-md w-64"
      >
        {BtnValue}
      </button>
    </form>
  );
};

export default Auth;
