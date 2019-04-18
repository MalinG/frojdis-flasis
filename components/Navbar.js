import React, { Component } from 'react'
import Link from 'next/link'

import Logo from './Logo'
import { colors } from '../theme'

class Navbar extends Component {
  state = {
    menuActive: false
  }

  handleToggleMenu = () => {
    this.setState({ menuActive: !this.state.menuActive})
  }

  handleClickOutside = (e) => {
    if(e.target === this.node) {
      this.handleToggleMenu()
    }
  }
  

  render() {
    return (
      <div 
        onClick={this.handleClickOutside} 
        className={`navbar ${this.state.menuActive && 'active'}`}
        >
        <button onClick={this.handleToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="overlay" ref={node => this.node = node}></div>
          <ul ref={menu => this.menu = menu}>
            <li><Link href="/create-workout"><a>Skapa nytt pass</a></Link></li>
            <li><Link href="/create-workout"><a>Välj ett pass</a></Link></li>
            <li><Link href="/timer"><a>Timer</a></Link></li>
          </ul>

        <style jsx>{`
          .navbar {
            height: 40px;
            margin-bottom: 32px;
          }
          .overlay {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0,0,0,0.6);
            z-index: 20;
          }
    
          .active .overlay {
            display: block;
          }

          ul {
            list-style: none;
            margin-bottom: 24px;
            position: absolute;
            padding-top: 24px;
            top: 0;
            bottom: 0;
            left: 0;
            width: 280px;
            background: ${colors.yellow};
            transform: translateX(-280px);
            transition: transform 0.2s ease-in;
            z-index: 20;
          }

          .active ul {
            transform: translateX(0);
            transition: all 0.2s ease-in;
          }
    
          li {
            margin-right: 15px;
          }
    
          a {
            display: block;
            padding: 8px 16px;
            margin: 8px 0;
            color: black;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            text-decoration: none;
          }

          button {
            position: absolute;
            left: 16px;
            background: transparent;
          }

          span {
            display: block;
            width: 32px;
            height: 3px;
            margin: 5px 0;
            border-radius: 1px;
            background: black;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Navbar