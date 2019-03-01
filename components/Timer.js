import React, { Component } from 'react'

// TODO: These setting will come from user input
// TODO: Add styling
const TIME = 3;
const REST = 2;
const LONGREST = 10;
const SETS = 2;
const ROUNDS = 2;

let timer;

export default class Timer extends Component {
  state = {
    restTime: REST,
    currentTime: TIME,
    currentRound: 1,
    currentSet: 1,
    active: true,
    finished: false,
    timerRunning: false,
    pause: false
  }

  handleResetTimer = () => {
    this.setState({
      restTime: 2,
      currentTime: TIME,
      currentRound: 1,
      currentSet: 1,
      active: true,
      finished: false,
      timerRunning: false
    })
  }

  handlePause = () => {
    this.setState({
      pause: !this.state.pause
    })
  }

  handleClearTimer = () => {
    clearInterval(timer);
  }

  startTimer = () => {
    this.setState({ timerRunning: true })
    timer = setInterval(() => {
      const { currentRound, currentSet, currentTime, active } = this.state

      if(this.state.finished || this.state.pause) {
        return
      }
      if(currentTime > 0) {
        
        this.setState({ currentTime: currentTime -1})
      } else if (!this.state.finished){
        let setCount;
        const restTime = currentSet === SETS ? LONGREST : REST
        
        if(!active)
          setCount = this.state.currentSet 
        this.setState({
          currentTime: active ? restTime : TIME,
          currentRound: (setCount === SETS) ? currentRound + 1 : currentRound,
          currentSet: active ? currentSet : setCount === SETS ? 1 : currentSet + 1,
          active: !active,
        })
        
        if(currentRound === ROUNDS && setCount === SETS) {
          this.setState({finished: true})
          this.handleClearTimer()
        }
      }
    }, 1000);
  }
  render() {
    const { active, finished, timerRunning, currentRound, currentSet, currentTime } = this.state
    const status = active ? 'Kämpa!' : 'Vila'

    const activeRound = finished ? ROUNDS : currentRound
    const activeSet = finished ? SETS : currentSet

    // TODO: Show as done after last execise, not last pause 

    return (
        <div>
          <div>
            <div>
              <div>Övning: {activeSet}/{SETS}</div>
              <div>Varv: {activeRound}/{ROUNDS}</div>
            </div>
            {finished && <div>KLART!!!</div>}
            {(!finished && timerRunning) && <div>{status}</div>}
          </div>


          <div>
            <div>{currentTime}</div>
          </div>
          <button onClick={this.startTimer}>Starta</button>
          <button onClick={this.handlePause}>Pausa</button>
          {finished && <button onClick={this.handleResetTimer}>Reset</button>}
        </div>
    )
  }
}
