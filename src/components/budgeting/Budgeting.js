import React from 'react'
import { BudgetingCard1 } from './budgetbutton'
import { BudgetingCard2 } from './budgetbutton'
import { BudgetingCard3 } from './budgetbutton'
import { BudgetingCard4 } from './budgetbutton'
import Charts from './Charts.js'

import './Budgeting.css'


import Header from '../header/Header'


const Budgeting = () => {
	return (
		<div>
			<Header/>
			<div>
				<div>
				<h1 className='budgeting-title'>Budgeting</h1>
				</div>
					<div className='budgetCards'>
						<Charts/>

						<BudgetingCard1 />
						<BudgetingCard2 />
						<BudgetingCard3 />
						<BudgetingCard4 />
					</div>
			</div>
		</div>
	)
}


export default Budgeting