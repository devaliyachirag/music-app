import { List } from "../../Context";
import React, { useContext } from "react";
import { useState } from "react";
import "./index.css";
interface Music {
  url: string;
  image: string;
  caption: string;
}
const Musics = () => {
  const context = useContext(List);
  const selectSong = (ind: number) => {
    context?.setIndex(ind);
    context?.setMode(true);
  };

  return (
    <>
      <div className="box">
        <h1 className="text-center m-3 text-shadow">Playlist</h1>
        {context?.list.map((value, index) => {
          return (
            <div key={index}>
              <section
                className="d-flex align-items-center p-2"
                onClick={() => selectSong(index)}
                style={
                  index == context.index
                    ? { backgroundColor: "rgb(150, 215, 253)" }
                    : { backgroundColor: "antiquewhite" }
                }
              >
                <div className="col-3">
                  <img
                    src={value.image}
                    className="img-thumbnail"
                    width={80}
                    alt=""
                  />
                </div>
                <div>
                  <h6>{value.caption}</h6>
                  <p className="text-muted"> {value.artist}</p>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Musics;
