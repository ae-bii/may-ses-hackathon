import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BlankHeader from './BlankHeader' 
import './Input.css'

const Input = () => {

	// add progress bar above the box // try to do multiple select
  const questions = [
		{
			questionText: 'What is your income bracket?',
			answerOptions: [
				{ answerText: 'Under $20k'},
				{ answerText: '$20k-$40k'},
				{ answerText: '$40k-$80k'},
				{ answerText: 'Above $80k'},
			],
		},
		{
			questionText: 'What is your top spending category?',
			answerOptions: [
				{ answerText: 'Groceries'},
				{ answerText: 'Online Shopping'},
				{ answerText: 'Travel'},
				{ answerText: 'Restaurants'},
			],
		},
		{
			questionText: 'What is your top budgeting category?',
			answerOptions: [
				{ answerText: 'Groceries'},
				{ answerText: 'Online Shopping'},
				{ answerText: 'Travel'},
				{ answerText: 'Restaurants'},
			],
		},
		{
			questionText: 'What is your location type?',
			answerOptions: [
				{ answerText: 'Urban'},
				{ answerText: 'Suburban'},
				{ answerText: 'Rural'},
			],
		},
		{
			questionText: 'What type of investment length are you looking for?',
			answerOptions: [
				{ answerText: 'Long-term'},
				{ answerText: 'Short-term'},
			],
		}
	]

	let navigate = useNavigate();

	const onSubmit = () => {
		navigate('/budgeting', {replace: true})
	}

	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showEnd, setShowEnd] = useState(false)

	const handleAnswerOptionClick = (isCorrect) => {
		
		const nextQuestion = currentQuestion + 1
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
		} else {
			setShowEnd(true);
		}
	}
	return (
		<div>
			<BlankHeader/>
			<div className='input'>
			{showEnd ? (
				<div className='score-section'>
					<div className='question-text'>
						Thank you for completing the questionaire!
					</div>
					<button className='continue' onClick={onSubmit}>Continue</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						{/* <div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div> */}
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className ='answer' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	)
}

export default Input