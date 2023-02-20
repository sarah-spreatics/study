import { useState, useRef, useEffect } from "react";
import "./ProgressBar.css";

interface Type {
  currentTime: number;
  totalTime: number;
}

export default function ProgressBar({ currentTime, totalTime }: Type) {
  const bar = useRef<HTMLDivElement>(null);
  const span = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(1);
  const [page, setPage] = useState(18);
  const [width, setWidth] = useState(bar.current?.clientWidth);

  const getWidth = () => {
    bar.current && setWidth(bar.current?.clientWidth);
  };

  useEffect(() => {
    if (span.current && bar.current) {
      span.current.style.width =
        (((bar.current.clientWidth / page) * index) / totalTime) * currentTime +
        "px";
    }

    window.addEventListener("resize", getWidth);
  }, [width, index, currentTime]);
  return (
    <>
      <div className="progress-bar">
        <div className="flex-box">
          <div className="bar" ref={bar}>
            <div className="d-flex">
              <span ref={span}></span>
              <span></span>
            </div>
          </div>
          <div className="page">
            {index} / {page}
          </div>
        </div>
        <button onClick={() => setIndex(index - 1)}>prev</button>
        <button onClick={() => setIndex(index + 1)}>next</button>
      </div>
    </>
  );
}
