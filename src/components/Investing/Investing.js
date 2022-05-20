import React from 'react'
import ReactSlider from 'react-slider'
import SuggestionCard from './SuggestionCard'
import './Investing.css'
import Header from '../header/Header'
import Slider from './Slider'

const Investing = () => {
	return (
		<div>
			<Header/>
			<div className='investing-container'>

				<div className='filter-container'>
				<h2>Filters</h2>
				<div className="slider">

					
					<Slider
						style={{paddingBottom:'0px'}}
						className="horizontal-slider"
						thumbClassName="example-thumb"
						trackClassName="example-track"
						renderTrack={(props, state) => <div {...props} />}/>
					<div className='slider-values'>
						<p className='left-value'>0.1%</p>
						<p className='right-value'>3%</p>
					</div>
					<p>Interest Rate</p>
					
					<br/>
					<br/>

					<Slider
						className="horizontal-slider"
						thumbClassName="example-thumb"
						trackClassName="example-track"
						renderTrack={(props, state) => <div {...props} />}/>
					<div className='slider-values'>
						<p className='left-value'>0.1%</p>
						<p className='right-value'>3%</p>
					</div>
					<p>Risk Rate</p>

					<br/>
					<br/>

					<Slider
						className="horizontal-slider"
						thumbClassName="example-thumb"
						trackClassName="example-track"
						renderTrack={(props, state) => <div {...props} />}/>
					<div className='slider-values'>
						<p className='left-value'>0.1%</p>
						<p className='right-value'>3%</p>
					</div>
					<p>Liquidity</p>
				</div>	
					
				</div>

					<div className='card-container'>
						<h1 className='investing-title'>Investing</h1>


						<div className='all-card-rows'>
							
							<SuggestionCard name='High-yield savings accounts' ir='0.3%' rr='0.5%' time='30'/>
							<SuggestionCard name='Short-term certificates of deposit' ir='0.2%' rr='0.5%' time='7'/>
							<SuggestionCard name='Short-term government bond funds' ir='0.3%' rr='0.5%' time='90'/>
						
							<SuggestionCard name='Series I bonds' ir='0.1%' rr='0.5%' time='7'/>
							<SuggestionCard name='Short-term corporate bond funds' ir='0.4%' rr='0.5%' time='30'/>
							<SuggestionCard name='S&P 500 index funds' ir='0.2%' rr='0.5%' time='14'/>
						
							<SuggestionCard name='Dividend stock funds' ir='0.3%' rr='0.5%' time='28'/>
							<SuggestionCard name='Value stock funds' ir='0.1%' rr='0.5%' time='30'/>
							<SuggestionCard name='Nasdaq-100 index funds' ir='0.1%' rr='0.5%' time='90'/>
							
						</div>
					</div>
				</div>
			</div>
	)
}

export default Investing
