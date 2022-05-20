import React from 'react'
import { BudgetingCard1 } from './budgetbutton'
import { BudgetingCard2 } from './budgetbutton'
import { BudgetingCard3 } from './budgetbutton'
import { BudgetingCard4 } from './budgetbutton'
import BarChart from './babycomponent/BarChart.js'
import './Budgeting.css'


import Header from '../header/Header'


const Budgeting = () => {
	return (
		<div>
			<div>
				<div className='budgetCards'>
					<BudgetingCard1 />
					<BudgetingCard2 />
					<BudgetingCard3 />
					<BudgetingCard4 />
				</div>
			</div>
		</div>
	)   
			<Header/>
			Budgeting
		</div>
	)
}

const Charts  = () => {
	return (
	<div>
		<h1>BarChart</h1>
		<BarChart
		/>
	</div>
	)   
}
export default Charts