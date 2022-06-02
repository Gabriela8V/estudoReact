import { useEffect, useState } from "react";

import Cards from "./Cards";
import Panel from "./Panel";
import Plans from "./Plans";
import Balance from "./Balance";
import Waitlist from "./Waitlist";

import { path } from "../../config/path";

export default function Container() {
  const [datacards, seteDataCards] = useState([]);
  useEffect(() => {
    fetch(
      `http://10.26.49.51:5001/api/wallet/list/user/628fd738bbd81a6612274e91`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGZkNjgzODc1NjgyYjg0NDgwNTc3MCIsInVzZXIiOiJoZWxlbmEiLCJlbWFpbCI6ImhlbGVuYTIwMjIudGVycmFnbWFpbC5jb20uYnIiLCJpYXQiOjE2NTQwMTc0OTIsImV4cCI6MTY1NDE5MDI5Mn0.Za1WdxN-uPTkSt63QkKYJD68SL-9jdPhmg4CjKQTmE8",
        },
      }
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data.payload);
        seteDataCards(data.payload);
      })
      .catch((err) => console.error(`Error at loading api ->${err}`));
  }, []);

  const [balace, setBalance] = useState([]);

  const changaData = (content) => {
    setBalance(content);
  };

  return (
    <div className="Container">
      <Cards data={datacards} />
      <Panel />
      <Plans />
      <Waitlist />
      <Balance data={balace} action={changaData} />
    </div>
  );
}
