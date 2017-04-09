import React from 'react'
import { BORDER_COLOR } from './config/colors'
import { Header, Footer } from './components'
import { SignupContent } from './containers'


export const App = () => (
  <div className="container">
    <Header title="Signup" step={3} totalSteps={3} />

    <SignupContent />

    <Footer
      step={2}
      totalSteps={3}
      onBackClick={_ => console.log('back')}
      onNextClick={_ => console.log('next')}
    />

    <style jsx>{`
      .container {
        font-family: 'Montserrat', Helvetica, arial, sans-serif, serif;
        border: 1px solid ${BORDER_COLOR};
        border-radius: 10px;
        width: 400px;
        height: 550px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-weight: lighter;
      }
    `}</style>
  </div>
)
