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
    <div className="bg-auto bg-indigo-500 text-zinc-200 font-jost p-20 h-full w-full">
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
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="./containers/background.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="https://www.google.com"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accomodation for your team
            </a>
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;