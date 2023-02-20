import { useEffect, useState, useRef } from "react";
import ProgressBar from "../progress-bar/ProgressBar";

export default function Audio() {
  const audio = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const setTime = () => {
    if (audio.current) audio.current.currentTime = endTime;
  };

  const controlVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(Number(e.target.value) * 0.01);
    if (audio.current) audio.current.volume = Number(e.target.value) * 0.01;
  };

  const handleTimeUpdate = () => {
    if (audio.current) {
      setCurrentTime(audio.current.currentTime);
    }
  };

  useEffect(() => {
    if (audio.current) {
      audio.current.onloadedmetadata = () => {
        if (audio.current) {
          console.log("total time", audio.current.duration);
          setEndTime(audio.current.duration);
        }
      };
      audio.current.addEventListener("timeupdate", handleTimeUpdate);
    }
  }, []);
  return (
    <>
      <audio
        ref={audio}
        src="https://d2iwdqgro8i2ew.cloudfront.net/codingon/lesson/script/344_voice.mp3"
        preload="metadata"
        controls
      />
      <br />
      <input type="range" onChange={controlVolume} />
      <button onClick={setTime}>강제 종료</button>
      <ProgressBar currentTime={currentTime} totalTime={endTime} />
    </>
  );
}
