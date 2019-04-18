import React, { Component } from 'react'
import ls from 'local-storage'
import Router from 'next/router'
import { LayoutWrap } from '../components/Layout'
import ExerciseList from '../components/ExerciseList'

import { colors } from '../theme';

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 've0a82yp',
  dataset: 'flasis'
})

// client
//   .fetch(
//     '*[_type == $type][0...5]', // Query
//     {type: 'movie'} // Params (optional)
//   )
//   .then(res => {
//     console.log('5 movies: ', res)
//   })
//   .catch(err => {
//     console.error('Oh no, error occured: ', err)
//   })

class CreateWorkout extends Component {
  state = {
    showFilter: false,
    selection: [],
    exercises: []
  }

  componentDidMount () {
    client.fetch(
      '*[_type == $type]', // Query
      {type: 'exercise'} // Params (optional)
    )
    .then(res => {
      console.log('exercises: ', res)
      this.setState({
        exercises: res
      })
      ls.set('allExercises', res)
    })
    .catch(err => {
      console.error('Oh no, error occured: ', err)
    })
  }

  handleToggleFilter = () => {
    this.setState({
      showFilter: !this.state.showFilter
    })
  }

  handleUpdateSelection = (selection) => {
    this.setState({
      selection
    })
  }

  handleNext = () => {
    ls.set('selectedExercises', this.state.selection)
    Router.push('/workout')
  }

  render() {
    return (
      <div>
        <h2>Select exercises</h2>
        {!this.state.showFilter && <div className="header">
            <div onClick={this.handleToggleFilter} className="icon"></div>
            <button onClick={this.handleNext}>Nästa</button>
          </div>}
        <ExerciseList updateSelection={this.handleUpdateSelection} exercises={this.state.exercises} />

        <style jsx>{`
          h2 {
            text-align: center;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 24px 0;
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