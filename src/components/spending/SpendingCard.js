import React from 'react'
import './SpendingCard.css'

const SpendingCard = (props) => {
	return (
		<div className='spend-card'>
			<p className='card-title'>{props.tip}</p>
			<div className='credit-bar'>
				<div class="child progress"></div>
			</div>

		</div>
	)
}

export default SpendingCard



