import { useEffect, useState, useRef } from "react";

export default function Audio() {
  const audio = useRef<HTMLAudioElement>(null);
  const [endTime, setEndTime] = useState(0);

  const showTime = () => {
    console.log(audio.current?.currentTime);
  };

  const setTime = () => {
    if (audio.current) audio.current.currentTime = endTime;
  };

  const controlVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(Number(e.target.value) * 0.01);
    if (audio.current) audio.current.volume = Number(e.target.value) * 0.01;
  };

  useEffect(() => {
    if (audio.current)
      audio.current.onloadedmetadata = () => {
        if (audio.current) {
          console.log(audio.current.duration);
          setEndTime(audio.current.duration);
        }
      };
  }, []);
  return (
    <>
      <audio
        ref={audio}
        src="https://d2iwdqgro8i2ew.cloudfront.net/codingon/lesson/script/4243_voice.mp3"
        preload="metadata"
        controls
        autoPlay
      />
      <br />
      <input type="range" onChange={controlVolume} />
      <button onClick={showTime}>현재 시간</button>
      <button onClick={setTime}>강제 종료</button>
    </>
  );
}
