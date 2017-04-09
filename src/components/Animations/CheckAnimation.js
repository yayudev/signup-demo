import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class CheckAnimation extends Component {
  static propTypes = {
    animate: PropTypes.bool
  }

  static defaultProps = {
    animate: false
  }

  render () {
    return (
      <svg width="200px" height="200px" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="container">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Check">
            <path d="M250,500 C388.071187,500 500,388.071187 500,250 C500,111.928813 388.071187,2.84217094e-14 250,2.84217094e-14 C111.928813,2.84217094e-14 2.84217094e-14,111.928813 2.84217094e-14,250 C2.84217094e-14,388.071187 111.928813,500 250,500 Z" id="Oval-1" fill="#B2F48C"></path>

            <path d="M115,250 C115,250 142.971917,284.964896 177.470284,328.087856 L215,375 L385,150" id="Path-1" stroke="#FFFFFF" strokeWidth="25" strokeDasharray="500 500" className={this.props.animate && 'path'}></path>
          </g>
        </g>

        <style jsx>{`
          .container {
            margin: 1em 0 3em 0;
          }

          .path {
            animation: 1s check;
            animation-timing-function: cubic-bezier(0.08, 0.12, 0.99, 0.51);
          }

          @keyframes check {
              0% { stroke-dashoffset: 500; }
              33% { stroke-dashoffset: 500; }
              100% { stroke-dashoffset: 0; }
          }
        `}</style>
      </svg>
    )
  }
}
