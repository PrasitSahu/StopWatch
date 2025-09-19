import React, { useState, useEffect, useRef } from "react";
import Cookies from "universal-cookie";
import CountBox from "./counterBox";
import Btn from "./btn";

const Counter = () => {
  const [counters, setCounters] = useState([
    { id: "days", value: 0 },
    { id: "hours", value: 0 },
    { id: "minutes", value: 0 },
    { id: "seconds", value: 0 },
  ]);
  const [timerState, setTimerState] = useState(false);
  const timerRef = useRef(null);
  const cookies = useRef(new Cookies());

  const counterContainerStyle = {
    backgroundColor: "#282c34",
    minHeight: "calc(100vh - 60px)",
    display: "flex",
    gap: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  };

  // Increment counters
  const tick = () => {
    setCounters((prev) => {
      const updated = [...prev];
      updated[3].value++; // seconds

      if (updated[3].value > 59) {
        updated[3].value = 0;
        updated[2].value++;
      }
      if (updated[2].value > 59) {
        updated[2].value = 0;
        updated[1].value++;
      }
      if (updated[1].value > 23) {
        updated[1].value = 0;
        updated[0].value++;
      }

      return updated;
    });
  };

  // Start timer
  const handleStart = () => {
    cookies.current.set("startTimer", Date.now(), { path: "/" });
    setTimerState(true);
    timerRef.current = setInterval(tick, 1000);
  };

  // Stop timer
  const handleStop = () => {
    setTimerState(false);
    clearInterval(timerRef.current);
  };

  // Reset timer
  const handleReset = () => {
    setCounters([
      { id: "days", value: 0 },
      { id: "hours", value: 0 },
      { id: "minutes", value: 0 },
      { id: "seconds", value: 0 },
    ]);
    setTimerState(false);
    clearInterval(timerRef.current);
  };

  const btnClick = () => {
    timerState ? handleStop() : handleStart();
  };

  const renderDotImg = (id) => {
    if (id === "seconds") return null;
    const width = id === "hours" ? 8 : 8;
    const height = id === "hours" ? 30 : 30;
    const margin = id === "hours" ? "0 30px" : "0 8px";
    return <img src="/img/dots.svg" width={width} height={height} style={{ margin }} alt=":" key={id} />;
  };

  return (
    <div style={counterContainerStyle} className="counter-container">
      <div className="d-flex justify-content-center align-items-center boxs-cover">
        {counters.map((counter) => (
          <CountBox key={counter.id} value={counter.value} id={counter.id}>
            {renderDotImg(counter.id)}
          </CountBox>
        ))}
      </div>
      <div className="d-flex flex-direction-rows justify-content-between gap-20 btn-cover">
        <Btn
          className={timerState ? "btn btn-danger" : "btn btn-primary"}
          onClick={btnClick}
          text={timerState ? "Pause" : "Start"}
          fontAwesomeIcon={timerState ? "pause" : "play"}
        />
        <Btn
          className="btn btn-secondary reset-btn"
          onClick={handleReset}
          text="Reset"
          fontAwesomeIcon="rotate-right"
        />
      </div>
    </div>
  );
};

export default Counter;
