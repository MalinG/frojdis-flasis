import React, { Component } from 'react'
import ls from 'local-storage'
import Router from 'next/router'

// import { exercises } from '../data.json'

import { colors } from '../theme'

export default class ExerciseList extends Component {
  state = {
    selected: []
  }
  handlePressItem = (id) => {
    if(this.itemIsSelected(id)) {
      this.setState({
        selected: this.state.selected.filter(x => x !== id)
      }, () => {
        this.props.updateSelection(this.state.selected)
      })
    } else {
      this.setState({
        selected: [...this.state.selected, id]
      }, () => {
        this.props.updateSelection(this.state.selected)
      })
    }    
  }

  itemIsSelected = (id) => {
    const isSelected = this.state.selected.some(x => x === id)
    return isSelected
  }

  render() {
    const { exercises } = this.props
    
    return (
      <div>
        <ul>
          {
            exercises.map(item => {
              const isSelected = this.itemIsSelected(item._id)
              return (
                <li key={item._id} className={isSelected ? 'selected' : null} onClick={() => this.handlePressItem(item._id)}>
                  <div className="video"></div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    {(item.types.length > 0) && <div className="meta">
                      {item.types.map(type => (
                        <span key={`${item._id}-${type}`} className="type">{type}</span>
                      ))}
                    </div>}
                  </div>
                </li>
              )
            }) 
          }
        </ul>
        <style jsx>{`
          ul {
            list-style: none;
            margin-top: 24px;
          }

          li {
            display: flex;
            align-items: center;
            padding: 8px;
            background:rgba(0, 0, 0, 0.05);
            margin: 8px 0;
            border-radius: 4px;
            color: ${colors.grays[86]};
            cursor: pointer;
          }

          li.selected {
            background: ${colors.yellow};
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
        `}
        </style>
      </div>
    )
  }
}
