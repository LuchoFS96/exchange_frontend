import { useEffect, useState } from "react";
import Coin from "../coin";
import "./index.css";

export default function Container() {
  const [apiData, setApiData] = useState();
  const [logoData, setLogoData] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/coins")
      .then((data) => data.json())
      .then((data) => setApiData(data));
  }, []);

  return (
    <div>
      {apiData?.map((coin, index) => {
        return (
          <Coin key={index} name={coin[1]} short={coin[0]} usd={coin[2]} />
        );
      })}
    </div>
  );
}
