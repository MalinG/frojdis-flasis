import React, { Component } from 'react'
import ls from 'local-storage'

import { LayoutWrap } from '../components/Layout'
import DraggableList from '../components/DraggableList'
import { exercises } from '../data.json'


class WorkoutPage extends Component {
  state = {
    selectedExercises: []
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
        <h1>This is your workout</h1>
        {(this.state.selectedExercises.length > 0) && 
          <DraggableList data={this.state.selectedExercises} />
        }
      </div>
    )
  }
}

export default LayoutWrap(WorkoutPage)
