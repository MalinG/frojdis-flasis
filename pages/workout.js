import React, { Component } from 'react'
import ls from 'local-storage'

import { LayoutWrap } from '../components/Layout'
import DraggableList from '../components/DraggableList'
import TimerSettings from '../components/TimerSettings'
import { exercises } from '../data.json'


class WorkoutPage extends Component {
  state = {
    selectedExercises: [],
    sets: 4,
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

  componentDidMount() {
    const selectedIds = ls.get('selectedExercises')
    const selectedExercises = exercises.filter(x => selectedIds.includes(x.id))
    this.setState({
      selectedExercises
    })
  }
  render() {
    return (
      <div>
        <h1>Mitt träningspass</h1>
        {!this.state.showSettings && <div onClick={this.handleToggleSettings} className="icon"></div>}
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
          .icon {
            margin: 24px 0;
            width: 50px;
            height: 50px;
            background: url('/static/svg/play.svg') no-repeat;
            background-size: contain;
          }
        `}</style>
      </div>
    )
  }
}

export default LayoutWrap(WorkoutPage)
