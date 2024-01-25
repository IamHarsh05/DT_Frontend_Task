import React, { useCallback, useEffect, useState } from "react";
import "./cards.css";
import Card from "./card";
import Card2 from "./card2";
import Card3 from "./card3";

export default function Subjects() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const getCharacter = useCallback(() => {
    setLoading(true);
    setData("");
    fetch(`https://rickandmortyapi.com/api/character`, {
      method: "GET",
    })
      .then(async (res) => {
        const datas = await res.json();
        if (res.status !== 404) setData(datas);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  return (
    <div>
      <div className="my-8">
        {loading && (
          <div className="my-64 px-2 md:my-16 text-4xl">Loading...</div>
        )}
        {data ? (
          <div className="my-36 md:my-14">
            <div className="title">
              <p>Technical Project Management</p>
            </div>
            <div className="disc">
              <div>
                <p>Explore the world of management</p>
              </div>
              <div>
                <p>
                  As a project manager, you play an important reole in leading a
                  project through initiation, planning, execution, monitoring,
                  controlling and completion. How? Do you want to manage each
                  and every step of your life?
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start">
              <Card />
              <Card2/>
            </div>
            <div className="flex flex-col md:flex-row items-start">
              <Card3 />
            </div>

          </div>
        ) : loading ? (
          <></>
        ) : (
          <p className="my-36 px-2 md:my-16 text-4xl">
            There is no Data Available
          </p>
        )}
      </div>
    </div>
  );
}
