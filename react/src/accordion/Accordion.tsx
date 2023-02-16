import { useRef, useState, useEffect } from "react";
import "./Accordion.css";

export default function Accordion() {
  const h2 = useRef<HTMLHeadingElement>(null);
  const p = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  const onClick = () => {
    if (show) setShow(false);
    else setShow(true);
  };

  useEffect(() => {
    if (p.current) {
      if (show) {
        p.current.classList.remove("close");
        p.current.classList.add("open");
      } else {
        p.current.classList.add("close");
        p.current.classList.remove("open");
      }
    }
  }, [show]);

  return (
    <>
      <div className="accordion">
        <h2 ref={h2} onClick={onClick}>
          Title
        </h2>
        <div ref={p} className="open">
          <p>Detail</p>
          <p>Detail</p>
        </div>
      </div>
    </>
  );
}
