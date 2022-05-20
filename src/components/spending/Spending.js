import React from 'react'
import Header from '../header/Header'
import SpendingCard from './SpendingCard'
import FicoCard from './FicoCard'
import './Spending.css'

const Spending = () => {
	return (
    <div>
        <Header/>
        <div className='spending-container'> 

        

        <div className='fico-score'>
        <h1 className='spending-title'>Spending</h1>
          <br/>
          <h3 className='fico-title'>Current FICO Score: 650</h3>
          <div className='fico-bar'>
            <div class="child progress"></div>
            <div class="child shrinker timelapse"></div>
          </div>
        </div>

        <br/>
        
        <div className='all-card-rows' style={{paddingBottom:'50px'}}>
          <div className='venture'>
            <img className="creditCard" src={require('./ventureCard.jpeg')} />
            <img className='bar' src={require('./lowBar.png')}/>
            <p className='percentText'>You're at 15% of your total usage😃</p>
          </div>
          
          <div className='venture'>
            <img className="creditCard" src={require('./savor.jpg')} />
            <img className='bar' src={require('./lowBar.png')}/>
            <p className='percentText'>You're at 15% of your total usage😃</p>
          </div>
         
         <div className='venture'>
            <img className="creditCard" src={require('./quicksilver.jpeg')} />
            <img className='bar' src={require('./highBar.png')}/>
            <p className='percentText'>You're at 75% of your total usage😢</p>
         </div>

        </div>
      </div>
    </div>
    
	)
}

export default Spending
