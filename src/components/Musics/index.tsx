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
  const context: any = useContext(List);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const selectSong = (ind: number) => {
    context?.setIndex(ind);
    context?.setMode(true);
  };

  const filteredList: Music[] = query
    ? context?.list.filter((item: any) =>
        item.caption.toLowerCase().includes(query.toLowerCase())
      )
    : context?.list;
  console.log(filteredList);
  return (
    <>
      <div className="box">
        <div
         className="sticky"
        >
          <h1 className="text-center m-3 text-shadow">Playlist</h1>
          <div className="contenir" style={{ position: "sticky", top: "0%" }}>
            <input
              type="text"
              className="search col-11"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
            />

            <button
              className="search-btn"
              id="search-inp-btn"
              onClick={() => filteredList}
            >
              &#x027A4;
            </button>
          </div>
        </div>
        {filteredList?.map((value: any, index: number) => {
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
