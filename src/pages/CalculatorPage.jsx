import React from 'react'
import BackgroundShapes from '../component/BackgroundShapes'
import Calculator from '../component/Calculator'

const CalculatorPage = () => {
  return (
    <div className='h-screen'>
      <div className="absolute -z-50">
        <BackgroundShapes/>
      </div>
      <div className='h-screen flex items-center justify-center'>
        <Calculator/>
      </div>
      
      </div>
  )
}

export default CalculatorPage
