import React, { useContext, useRef, useState } from "react";
import { List } from "../../Context";
import "./index.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Stack from "@mui/material/Stack";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { hover } from "@testing-library/user-event/dist/hover";


const Card = () => {
  const [time, setTime] = useState<any>(0);
  const context = useContext(List);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playSong = () => {
    if (context?.mode) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };
  const previousSong = () => {
    if (context?.index == 0) {
      context?.setIndex(context?.list.length - 1);
    } else {
      context?.setIndex(context?.index - 1);
      context?.setMode(true);
    }
  };
  const nextSong = () => {
    if (context?.list && context?.index == context?.list.length - 1) {
      context?.setIndex(0);
    } else {
      context?.setIndex(context?.index + 1);
      context?.setMode(true);
    }
  };
  const updateSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    var seekTime = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      setTime(seekTime);
    }
  };
  const getTime = (time: any) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const timeUpdate = () => {
    if (audioRef.current) {
      setTime(audioRef.current.currentTime);
    }
  };
  const volumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  const handleDownload = () => {
    if (audioRef.current) {
      const downloadLink = document.createElement("a");
      downloadLink.href = audioRef.current.src;
      downloadLink.download = "audio.mp3";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  return (
    <div
      className="page"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
          context?.list[context?.index]?.image
        })`,
      }}
    >
      <div className="card2 col-3">
        <div>
          <img
            className="page-img"
            src={context?.list[context?.index].image}
            alt=""
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2>{context?.list[context?.index].caption}</h2>
          <p className="h4 mt-2"> {context?.list[context.index].artist}</p>
        </div>
        <div className="col-12">
          <audio
            src={context?.list[context?.index].url}
            ref={audioRef}
            onTimeUpdate={timeUpdate}
          />
          <div className="d-flex justify-content-between">
            <p>
              {audioRef.current
                ? getTime(audioRef.current?.currentTime)
                : "0:00"}
            </p>
            <input
              type="range"
              className="d-block col-9 m-0"
              min={0}
              max={audioRef.current?.duration || 1}
              value={time}
              style={{ margin: "14px 0px", color: "gray" }}
              onChange={updateSlider}
            />
            <p>
              {audioRef.current?.duration
                ? getTime(audioRef.current?.duration)
                : "0:00"}
            </p>
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-between">
          <SkipPreviousIcon
            style={{ fontSize: "50px" }}
            onClick={() => previousSong()}
          />

          <div onClick={() => playSong()}>
            {context?.mode || time == audioRef.current?.duration ? (
              <PlayArrowIcon
                style={{ fontSize: "50px" }}
                onClick={() => context?.setMode(false)}
              />
            ) : (
              <PauseIcon
                style={{ fontSize: "50px" }}
                onClick={() => context?.setMode(true)}
              />
            )}
          </div>
          <SkipNextIcon
            style={{ fontSize: "50px" }}
            onClick={() => nextSong()}
          />
        </div>
        <div className="col-lg-12 d-flex justify-content-between">
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <input
              type="range"
              aria-label="Volume"
              min={0}
              max={1}
              step={0.01}
              onChange={volumeChange}
            />
            <VolumeUp />
          </Stack>
          <CloudDownloadIcon
            style={{ fontSize: "40px" }}
            onClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
