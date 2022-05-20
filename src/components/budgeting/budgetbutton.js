import React from 'react'
import './buttons.css'

const BudgetingCard1 = () => {
  return (
    <div className='budCards'>
      <spacer/>
      <h1>Groceries</h1>
    </div>
  )
}

const BudgetingCard2 = () => {
  return (
    <div className='budCards'>
      <spacer/>
      <h1>Eating Out</h1>
    </div>
  )
}
const BudgetingCard3 = () => {
  return (
    <div className='budCards'>
      <spacer/>
      <h1>Fun </h1>
    </div>
  )
}

const BudgetingCard4 = () => {
  return (
    <div className='budCards'>
      <spacer/>
      <h1>Education </h1>
    </div>
  )
}

export {
  BudgetingCard1, 
  BudgetingCard2,
  BudgetingCard3, 
  BudgetingCard4
};
