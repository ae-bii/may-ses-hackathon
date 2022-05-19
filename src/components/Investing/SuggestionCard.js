import React from 'react'
import './SuggestionCard.css'

const SuggestionCard = (props) => {
	return (
		<div className='card'>
			<spacer/>
			<img className='star' src='empty_star.png'/>
			<p className='card-title'>{props.name}</p>
			<h6>Interest Rate</h6>
			<h6>Risk Rate</h6>
		</div>
	)
}

export default SuggestionCard