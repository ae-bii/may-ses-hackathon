import React from 'react'
import './SuggestionCard.css'

const SuggestionCard = (props) => {
	return (
		<div className='card'>
			<spacer/>
			<div className='info-button-container'>
				<button className='info-button'>+</button>
			</div>
			<h4 className='card-title'>{props.name}</h4>
			<h6>{props.ir} interest rate</h6>
			<h6>{props.rr} risk rate</h6>
		</div>
	)
}

export default SuggestionCard