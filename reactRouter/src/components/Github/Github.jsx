// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/AdityaG1912")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="text-center m-3 bg-gray-600 text-white text-2xl">
      Github followers:{data.followers}
      <img
        className="p-2"
        src={data.avatar_url}
        alt="Git picture"
        width={250}
      ></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/AdityaG1912");
  return response.json();
};
