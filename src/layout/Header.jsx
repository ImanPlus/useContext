import { Button } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

export default function Header() {
  const { isLogin, setIsLogin } = useContext(AppContext);

  return (
    <header className="container mx-auto p-3 flex justify-between items-center bg-slate-500">
      <div>
        {isLogin ? (
          <span className="font-semibold text-red-700 text-2xl">
            ایمان جلالی
          </span>
        ) : (
          <Button color="failure">نام کاربری</Button>
        )}
      </div>
      <nav>
        <ul className="list-none flex gap-4 flex-row-reverse">
          <li className="hover:text-white">
            <Link to="/">خانه</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/articles">مقاله ها</Link>
          </li>
          <li className="hover:text-white cursor-pointer">
            <span onClick={() => setIsLogin(false)}>خروج</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
