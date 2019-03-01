import React, { Component } from 'react'
import ls from 'local-storage'
import Router from 'next/router'

import { LayoutWrap } from '../components/Layout'
import DraggableList from '../components/DraggableList'
import TimerSettings from '../components/TimerSettings'
import { exercises } from '../data.json'
import { colors } from '../theme';


class WorkoutPage extends Component {
  state = {
    selectedExercises: [],
    sets: 3,
    time: 45,
    rest: 15,
    longRest: 45,
    showSettings: false
  }

  handleInputChange = (value, field) => {
    console.log(value)
    this.setState({
      [field]: value
    })
  }

  handleToggleSettings = () => {
    this.setState({
      showSettings: !this.state.showSettings
    })
  }

  handleStart = () => {
    ls.set('timer', {
      sets: this.state.sets,
      time: this.state.time,
      rest: this.state.rest,
      longRest: this.state.longRest
    })
    // Router.push('/go')
  }

  componentDidMount() {
    const selectedIds = ls.get('selectedExercises')
    const selectedExercises = exercises.filter(x => selectedIds.includes(x.id))
    this.setState({
      selectedExercises
    })
  }

  render() {
    console.log(this.state.selectedExercises)
    return (
      <div>
        <h1>Mitt träningspass</h1>
        {!this.state.showSettings && <div className="header">
          <div onClick={this.handleToggleSettings} className="icon"></div>
          <button onClick={this.handleStart}>Sätt igång!</button>
        </div>}
        {this.state.showSettings && <TimerSettings
          sets={this.state.sets}
          time={this.state.time}
          rest={this.state.rest}
          longRest={this.state.longRest}
          onInputChange={this.handleInputChange}
          toggleSettings={this.handleToggleSettings}
        />}
        {(this.state.selectedExercises.length > 0) && 
          <DraggableList data={this.state.selectedExercises} />
        }

        <style jsx>{`
          h1 {
            text-align: center;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 24px 0;
          }
          button {
            background: ${colors.yellow};
          }
          .icon {
            width: 32px;
            height: 32px;
            background: url('/static/svg/stopwatch.svg') no-repeat;
            background-size: contain;
          }
        `}</style>
      </div>
    )
  }
}

export default LayoutWrap(WorkoutPage)
