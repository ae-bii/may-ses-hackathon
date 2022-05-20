import React from 'react'
import './buttons.css'

const BudgetingCard1 = () => {
  return (
    <div className='budCards'>
      <spacer/>
      <div className='budCardtitle'>
        <h1>Groceries</h1>
          <div className='leaderboard'>
          <h2>Leaderboard</h2>
              <h4>1.Susan</h4>
              <h4>2.Sally</h4>
              <h4>3.Sue</h4>
          </div>=
      </div>
    </div>
  )
}

const BudgetingCard2 = () => {
  return (
    <div className='budCards'>
      <spacer/>
      <div className='budCardtitle'>
        <h1>Eating Out</h1>
        <div className='leaderboard'>
            <h2>Leaderboard</h2>
            <h4>1.Sally</h4>
            <h4>2.Susan</h4>
            <h4>3.Sue</h4>
        </div>
      </div>
    </div>
  )
}
const BudgetingCard3 = () => {
  return (
    <div className='budCards'>
      <spacer/>
      <div className='budCardtitle'>
        <h1>Fun </h1>
        <div className='leaderboard'>
          <h2>Leaderboard</h2>
              <h4>1.Sue</h4>
              <h4>2.Sally</h4>
              <h4>3.Susan</h4>
        </div>
      </div>
    </div>
  )
}

const BudgetingCard4 = () => {
  return (
    <div className='budCards'>
      <spacer/>
      <div className='budCardtitle'>
          <h1>Education </h1>
          <div className='leaderboard'>
            <h2>Leaderboard</h2>
              <h4>1.Sally</h4>
              <h4>2.Sue</h4>
              <h4>3.Susan</h4>
          </div>
      </div>
      
    </div>
  )
}

export {
  BudgetingCard1, 
  BudgetingCard2,
  BudgetingCard3, 
  BudgetingCard4
};
