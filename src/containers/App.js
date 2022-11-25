import React, { useEffect, useState } from "react";
import IssMap from "./map";
import "./App.css";
import convertUnixToTime from "./convertUNIXtoTIME";

const App = () => {
  const [data, setData] = useState();

  const fetchData = () => {
    fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((iss) => setData(iss))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-auto bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-zinc-200 font-jost p-20 h-full w-full">
      <div className="flex flex-col place-items-center justify-between text-center">
        <h1 className="text-8xl p-15">
          International Space Station (ISS) Tracker
        </h1>
        {data && (
          <h2 className="text-5xl p-3 text-justify tabular-nums">
            Latitude: {data?.iss_position.latitude} <br />
            Longitude: {data?.iss_position.longitude} <br />
            Time stamp: {convertUnixToTime(data?.timestamp)}
          </h2>
        )}
        <button
          onClick={fetchData}
          className="bg-cyan-500 hover:bg-cyan-600 rounded-md p-1 px-2 shadow-md shadow-slate-900"
        >
          Refresh
        </button>
        {data && (
          <div className="h-fit w-fit p-6">
            <IssMap data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;