import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'; 
import './Input.css'

const Input = () => {

	// add progress bar above the box // try to do multiple select
  const questions = [
		{
			questionText: 'What is your income bracket?',
			answerOptions: [
				{ answerText: 'Something'},
				{ answerText: 'Another thing'},
				{ answerText: 'Something else'},
				{ answerText: 'One more thing'},
			],
		},
		{
			questionText: 'What is your top spending category?',
			answerOptions: [
				{ answerText: 'Groceries'},
				{ answerText: 'Online Shopping'},
				{ answerText: 'Something else'},
				{ answerText: 'One more thing'},
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
			questionText: 'What is your top spending category?',
			answerOptions: [
				{ answerText: 'Groceries'},
				{ answerText: 'Online Shopping'},
				{ answerText: 'Something else'},
				{ answerText: 'One more thing'},
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
	)
}

export default Input