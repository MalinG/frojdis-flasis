import React, { Component } from 'react'
import ls from 'local-storage'
import { colors } from '../theme'

// TODO: These setting will come from user input
// TODO: Add styling

let timer;

class Timer extends Component {
  state = {
    rest: 0,
    longRest : 0,
    reps: 0,
    sets: 0,
    currentTime: 0,
    currentSet: 1,
    currentRep: 1,
    active: true,
    finished: false,
    timerRunning: false,
    pause: false,
    currentExercise: '',
    exercises: []
  }

  componentDidMount() {
    this.resetTimer()
  }

  resetTimer = () => {
    const settings = ls.get('timer')
    const exercises = ls.get('exercises')
    const { time, rest, longRest, reps, sets} = settings
    this.setState({
      rest,
      longRest,
      reps,
      sets,
      time,
      currentTime: time,
      timerRunning: false,
      exercises,
      currentExercise: exercises[0].title,
      finished: false
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
      const { 
        currentSet, 
        currentRep, 
        currentTime, 
        active, 
        reps, 
        time, 
        rest, 
        sets, 
        longRest,
        exercises
      } = this.state

      if(this.state.finished || this.state.pause) {
        return
      }
      if(currentTime > 0) {
        
        this.setState({ currentTime: currentTime -1})
      } else if (!this.state.finished){
        let repCount;
        const restTime = currentRep === reps ? longRest : rest


        
        if(!active)
          repCount = this.state.currentRep 
        this.setState({
          currentTime: active ? restTime : time,
          currentSet: (repCount === reps) ? currentSet + 1 : currentSet,
          currentExercise:  active ? 'Vila' : repCount === reps ? exercises[0].title : exercises[currentRep].title,
          currentRep: active ? currentRep : repCount === reps ? 1 : currentRep + 1,
          active: !active,
        })
        
        if(currentSet === sets && repCount === reps) {
          this.setState({finished: true})
          this.handleClearTimer()
        }
      }
    }, 1000);
  }

  render() {
    const {
      sets,
      reps,
      active, 
      finished, 
      timerRunning, 
      currentSet, 
      currentRep, 
      currentTime 
    } = this.state
    const status = active ? 'Kämpa!' : 'Vila'
    const activeRound = finished ? sets : currentSet
    const activeSet = finished ? reps : currentRep

    // TODO: Show as done after last execise, not last pause 

    return (
        <div>
          <div>
            <div className="header">
              <div>Övning: {activeSet}/{reps}</div>
              <div>Varv: {activeRound}/{sets}</div>
            </div>
            {finished && <div>KLART!!!</div>}
          </div>
          
          <div className="exercise">
            <h2>{this.state.currentExercise}</h2>
          </div>

          <div>
            <div className="time">{currentTime}</div>
          </div>
          <div className="controls">
            {!timerRunning && <button onClick={this.startTimer}>Starta</button>}
            {timerRunning && <button onClick={this.handlePause}>Pausa</button>}
            {finished && <button onClick={this.resetTimer}>Reset</button>}
          </div>

          <style jsx>{`
            .header {
              display: flex;
              justify-content: space-between;
              margin: 24px 0;
            }
            .exercise {
              margin: 48px 0 24px;
              text-align: center;
              color: ${colors.yellow};
            }
            .time {
              font-size: 180px;
              font-weight: bold;
              text-align: center;
            }
            .controls {
              margin-top: 80px;
              text-align: center;
            }
            button {
              background: ${colors.yellow};
            }
          `}
          </style>
        </div>
    )
  }
}

export default Timer