import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Articles() {
  const { isLogin } = useContext(AppContext);

  return (
    <>
      {isLogin ? (
        <div className="container mx-auto flex justify-between items-center flex-wrap mt-10 gap-4">
          <div className="p-24 bg-amber-600 font-bold">Article</div>
          <div className="p-24 bg-amber-600 font-bold">Article</div>
          <div className="p-24 bg-amber-600 font-bold">Article</div>
          <div className="p-24 bg-amber-600 font-bold">Article</div>
          <div className="p-24 bg-amber-600 font-bold">Article</div>
          <div className="p-24 bg-amber-600 font-bold">Article</div>
        </div>
      ) : (
        <p className="text-4xl flex justify-center items-center mt-10">
          شما باید وارد شوید
        </p>
      )}
    </>
  );
}
