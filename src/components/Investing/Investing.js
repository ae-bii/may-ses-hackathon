import React from 'react'
import ReactSlider from 'react-slider'
import SuggestionCard from './SuggestionCard'
import './Investing.css'
import Header from '../header/Header'

const Investing = () => {
	return (
		<div className='investing-container'>

			<div className='filter-container'>
				<h5>Filters</h5>

				<ReactSlider
					className="horizontal-slider"
					thumbClassName="example-thumb"
					trackClassName="example-track"
					renderTrack={(props, state) => <div {...props} />}/>
				
			</div>

				<div className='card-container'>
					<h1 className='investing-title'>Investing</h1>


					<div className='all-card-rows'>
						
						<SuggestionCard name='High-yield savings accounts' ir='0.3%' rr='0.5%'/>
						<SuggestionCard name='Short-term certificates of deposit' ir='0.2%' rr='0.5%'/>
						<SuggestionCard name='Short-term government bond funds' ir='0.3%' rr='0.5%'/>
					
						<SuggestionCard name='Series I bonds' ir='0.1%' rr='0.5%'/>
						<SuggestionCard name='Short-term corporate bond funds' ir='0.4%' rr='0.5%'/>
						<SuggestionCard name='S&P 500 index funds' ir='0.2%' rr='0.5%'/>
					
						<SuggestionCard name='Dividend stock funds' ir='0.3%' rr='0.5%'/>
						<SuggestionCard name='Value stock funds' ir='0.1%' rr='0.5%'/>
						<SuggestionCard name='Nasdaq-100 index funds' ir='0.1%' rr='0.5%'/>
						
					</div>
				</div>

			</div>
		</div>
	)
}

export default Investing
