import React, { Component } from 'react'
import ls from 'local-storage'
import { LayoutWrap } from '../components/Layout'
import Timer from '../components/Timer'

import { colors } from '../theme';

class Go extends Component {
  state = {
    timerSettings: {},
    exercises: []
  }

  componentDidMount () {
    const timerSettings = ls.get('timer')
    const exercises = ls.get('exercises')

    this.setState({
      timerSettings,
      exercises
    })
  }
  render() {
    return (
      <div>
        {/* {(this.state.exercises.length > 0) &&
          <h2>this.state.exercises[0].title</h2>
        } */}

        {this.state.timerSettings && 
          <Timer settings={this.state.timerSettings} />
        }
      </div>
    )
  }
}

export default LayoutWrap(Go)