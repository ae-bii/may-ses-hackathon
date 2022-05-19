import React from 'react'
import SuggestionCard from './SuggestionCard'
import './Investing.css'

const Investing = () => {
	return (
		<div className='investing-container'>

			<div className='filter-container'>
				<h4>Filter</h4>
				
			</div>

			<div className='card-container'>
				<h1 className='investing-title'>Investing</h1>


				<div className='all-card-rows'>
					
					<SuggestionCard name='High-yield savings accounts'/>
					<SuggestionCard name='Short-term certificates of deposit'/>
					<SuggestionCard name='Short-term government bond funds'/>
				
					<SuggestionCard name='Series I bonds'/>
					<SuggestionCard name='Short-term corporate bond funds'/>
					<SuggestionCard name='S&P 500 index funds'/>
				
					<SuggestionCard name='Dividend stock funds'/>
					<SuggestionCard name='Value stock funds'/>
					<SuggestionCard name='Nasdaq-100 index funds'/>
					
				</div>
			</div>

		</div>
	)
}

export default Investing