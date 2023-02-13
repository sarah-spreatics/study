import { useEffect, useState, useRef } from "react";

export default function TypingAnimation() {
  const div = useRef<HTMLDivElement>(null);
  const [tmp, setTmp] = useState(0);
  const txt = "This text will type out faster than the default speed.";

  const type = () => {
    if (tmp < txt.length) {
      if (div.current) div.current.innerHTML += txt.charAt(tmp);
      setTmp(tmp + 1);
    }
  };

  useEffect(() => {
    setTimeout(type, 100);
  }, [tmp]);
  return (
    <>
      <div ref={div}></div>
    </>
  );
}
