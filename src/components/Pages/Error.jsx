import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="w-[20vw] mx-auto pt-[10vh]">
      <h1 className="text-5xl text-red-500">Oops!!!</h1>
      <h2 className="text-3xl pt-2">Something went wrong!!</h2>
      <h3 className="pt-2">
        <span className="text-2xl text-red-500">{error.status}</span> {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
