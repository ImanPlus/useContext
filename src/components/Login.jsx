import { Button } from "flowbite-react";
import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

export default function Login() {
  const { setIsLogin } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-3 bg-blue-400 p-3">
      <h1 className="font-bold">Login</h1>
      <label htmlFor="userName">User Name:</label>
      <input id="userName" type="text" />

      <label htmlFor="password">Password:</label>
      <input id="password" type="text" />

      <Button onClick={() => setIsLogin(true)} color="blue">
        Log In
      </Button>
    </div>
  );
}
