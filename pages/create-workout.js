import React, { Component } from 'react'
import ls from 'local-storage'
import Router from 'next/router'
import { LayoutWrap } from '../components/Layout'
import ExerciseList from '../components/ExerciseList'

import { colors } from '../theme';

class CreateWorkout extends Component {
  state = {
    showFilter: false,
    selection: []
  }

  handleToggleFilter = () => {
    this.setState({
      showFilter: !this.state.showFilter
    })
  }

  handleUpdateSelection = (selection) => {
    console.log(selection)
    this.setState({
      selection
    })
  }

  handleStart = () => {
    ls.set('selectedExercises', this.state.selection)
    Router.push('/workout')
  }

  render() {
    return (
      <div>
        <h1>Hur vill du träna idag?</h1>
        {!this.state.showFilter && <div className="header">
            <div onClick={this.handleToggleFilter} className="icon"></div>
            <button onClick={this.handleStart}>Sätt igång!</button>
          </div>}
        <ExerciseList updateSelection={this.handleUpdateSelection} />

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
            width: 28px;
            height: 28px;
            background: url('/static/svg/filter.svg') no-repeat;
            background-size: contain;
          }
        `}</style>
      </div>
    )
  }
}

export default LayoutWrap(CreateWorkout)