import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Login from "../components/Login";

export default function Home() {
  const { isLogin } = useContext(AppContext);

  return (
    <div className="flex justify-center items-center mt-10">
      {isLogin ? <h1 className="text-4xl">شما وارد شده اید</h1> : <Login />}
    </div>
  );
}
