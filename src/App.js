import React from 'react'
import { BORDER_COLOR } from './config/colors'

export const App = () => (
  <div className="container">
    <style jsx>{`
      .container {
        border: 1px solid ${BORDER_COLOR};
        border-radius: 10px;
        width: 400px;
        height: 550px;
      }
    `}</style>
  </div>
)
