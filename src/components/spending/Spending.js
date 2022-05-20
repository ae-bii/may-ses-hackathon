import React from 'react'
import SpendingCard from './SpendingCard'
import FicoCard from './FicoCard'
import './Spending.css'

const Spending = () => {
	return (
    <div className='spending-container'> 

      

      <div className='fico-score'>
        <h1>Spending</h1>
        <br/>
        <h3 className='fico-title'>Current FICO Score: 550</h3>
        <div className='fico-bar'>
          <div class="child progress"></div>
          <div class="child shrinker timelapse"></div>
        </div>
      </div>

      <br/>
      
      <div className='all-card-rows'>
        <SpendingCard name='Current fico Score: 550'/>
        <SpendingCard name='Current fico Score: 550'/>
        <SpendingCard name='Current fico Score: 550'/>

        <SpendingCard name='Current FICO Score: 550'/>
        <SpendingCard name='Current fico Score: 550'/>
        <SpendingCard name='Current fico Score: 550'/>

        <SpendingCard name='Current fico Score: 550'/>
        <SpendingCard name='Current FICO Score: 550'/>
        <SpendingCard name='Current fico Score: 550'/>

        {/* <FicoCard name='Current FICO Score: 550'/>
        <FicoCard name='Current FICO Score: 550'/>
        <FicoCard name='Current FICO Score: 550'/>
        <FicoCard name='Current FICO Score: 550'/> */}
      </div>

export default Spending
