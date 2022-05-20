import React, { useState } from 'react'
import './Input.css'

const Input = () => {
  const questions = [
		{
			questionText: 'This is a question that should wrap around to the bottom',
			answerOptions: [
				{ answerText: 'Something'},
				{ answerText: 'Another thing'},
				{ answerText: 'Something else'},
				{ answerText: 'One more thing'},
			],
		}
	]

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
					Thank you for completing the questionaire!
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default Input