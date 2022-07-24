import React, { Component } from "react";
import Cookies from "universal-cookie";
import CountBox from "./counterBox";
import Btn from "./btn";

class Counter extends Component {
  // Component state
  state = {
    counters: [
      { id: "days", value: 0 },
      { id: "hours", value: 0 },
      { id: "minutes", value: 0 },
      { id: "seconds", value: 0 },
    ],
    counterContainer: {
      backgroundColor: "#282c34",
      minHeight: "calc(100vh - 60px)",
      display: "flex",
      gap: 50,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white",
    },
    timerState: false,
    cookies: null,
  };

  timer = null;

  // Get the class for the button
  getBtnClass(timerState) {
    if (timerState) return "danger";
    return "primary";
  }

  // Render dot image
  renderDotImg = (id) => {
    if (id === "hours")
      return (
        <img
          src="/img/dots.svg"
          width="8"
          height="30"
          style={{ marginLeft: 30, marginRight: 30 }}
          key={id}
          alt=":"
        />
      );

    if (id === "seconds") return;

    return (
      <img
        src="/img/dots.svg"
        width="8"
        height="30"
        style={{ marginLeft: 8, marginRight: 8 }}
        key={id}
        alt=":"
      />
    );
  };

  // Handle start button click
  handleStart = () => {
    let cookies = new Cookies();
    cookies.set("startTimer", Date.now(), { path: "/" });
    this.setState({ cookies });
    this.setState({ timerState: true, btnText: "Stop" });
    this.timer = setInterval(() => {
      let counters = [...this.state.counters];
      if (counters[3].value === 59) {
        if (counters[2].value === 59) {
          counters[2].value = 0;
          if (counters[1].value === 23) {
            counters[1].value = 0;
            counters[0].value++;
          } else counters[1].value++;
        } else counters[2].value++;
        counters[3].value = 0;
      }

      counters[3].value++;

      this.setState({ counters });
    }, 1000);
  };

  // Handle stop button click
  handleStop = () => {
    this.setState({ timerState: false, btnText: "Start" });
    clearInterval(this.timer);
  };

  // hendle reset button click
  haldleReset = () => {
    let counters = [...this.state.counters];
    counters.forEach((counter) => {
      counter.value = 0;
    });
    this.setState({ counters, timerState: false, btnText: "Start" });
    clearInterval(this.timer);
  };

  btnClick = () => {
    if (this.state.timerState) return this.handleStop;
    else return this.handleStart;
  };

  render() {
    return (
      <div style={this.state.counterContainer} className="counter-container">
        <div className="d-flex justify-content-center align-items-center boxs-cover">
          {this.state.counters.map((counter) => (
            <CountBox key={counter.id} value={counter.value} id={counter.id}>
              {this.renderDotImg(counter.id)}
            </CountBox>
          ))}
        </div>
        <div className="d-flex flex-direction-rows justify-content-between gap-20 btn-cover">
          <Btn
            className={
              this.state.timerState ? "btn btn-danger" : "btn btn-primary"
            }
            onClick={this.btnClick()}
            text={this.state.timerState ? "Pause" : "Start"}
            fontAwesomeIcon={this.state.timerState ? "pause" : "play"}
          ></Btn>
          <Btn
            className="btn btn-secondary reset-btn"
            onClick={this.haldleReset}
            text="Reset"
            fontAwesomeIcon="rotate-right"
          ></Btn>
        </div>
      </div>
    );
  }
}

export default Counter;
