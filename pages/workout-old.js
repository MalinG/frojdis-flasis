import React, { Component } from 'react'
import ls from 'local-storage'
import Router from 'next/router'

import { LayoutWrap } from '../components/Layout'
import { exercises } from '../data.json'

import { colors } from '../theme'

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
        {(this.state.selectedExercises.length > 0) && <ul>
          { 
            this.state.selectedExercises.map(item => {
              return (
                <li key={item.id}>
                  <div className="video"></div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    {(item.types.length > 0) && <div className="meta">
                      {item.types.map(type => (
                        <span key={type} className="type">{type}</span>
                      ))}
                    </div>}
                  </div>
                </li>
              )
            }) 
          }
        </ul>}
        <style jsx>{`
            ul {
              margin-top: 24px;
            }

            li {
              display: flex;
              align-items: center;
              padding: 8px;
              background: white;
              margin: 8px 0;
              border-radius: 4px;
              color: ${colors.grays[86]};
              cursor: pointer;
            }

            .video {
              width: 100px;
              height: 56px;
              background: #ccc;
              margin-right: 24px;
            }

            h3 {
              margin: 0 0 8px 0;
            }

            .type {
              display: inline-block;
              padding: 0 6px 3px;
              border-radius: 2px;
              margin-right: 4px;
              line-height: 16px;
              background: ${colors.purple};
              font-size: 12px;
              color: white;
            }

            .button-wrapper {
              text-align: center
            }

            button {
              background: ${colors.yellow};
              margin: 24px auto;
            }
        `}
        </style>
      </div>
    )
  }
}

export default LayoutWrap(WorkoutPage)
