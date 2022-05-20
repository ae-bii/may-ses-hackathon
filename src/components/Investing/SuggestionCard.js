import React from 'react'
import './SuggestionCard.css'

const SuggestionCard = (props) => {
	return (
		<div className='card'>
			<spacer/>
			<div className='info-button-container'>
				<button className='info-button'>+</button>
			</div>
			<p className='suggestion'>{props.name}</p>
			<div className='rate'>
				<p>{props.ir} interest rate</p>
				<p>{props.rr} risk rate</p>
				<p>Average return {props.time} days</p>
			</div>
			
		</div>
	)
}

export default SuggestionCard