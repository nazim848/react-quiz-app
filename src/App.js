import React, { useState, useEffect } from 'react'
import StartQuiz from './components/Quiz/Start'
import Quiz from './components/Quiz/Quiz'
import QuizResult from './components/Quiz/Result'
import classes from './styles/App.module.css'
import QuizClasses from './styles/Quiz/Quiz.module.css'

const App = () => {
	const [quizs, setQuizs] = useState([])
	const [question, setQuestion] = useState({})
	const [questionIndex, setQuestionIndex] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState('')
	const [correctAnswer, setCorrectAnswer] = useState('')
	const [marks, setMarks] = useState(0)

	const [showStartQuiz, setShowStartQuiz] = useState(true)
	const [showQuiz, setShowQuiz] = useState(false)
	const [showResult, setShowResult] = useState(false)

	// Load JSON data
	useEffect(() => {
		fetch('quiz.json')
			.then((res) => res.json())
			.then((data) => setQuizs(data))
	}, [])

	// Set a single question
	useEffect(() => {
		if (quizs.length > questionIndex) {
			setQuestion(quizs[questionIndex])
		}
	}, [quizs, questionIndex])

	// Start quiz
	const startQuizHandler = () => {
		setShowStartQuiz(false)
		setShowQuiz(true)
	}

	// Check answer
	const checkAnswerHandler = (event, selected) => {
		if (!selectedAnswer) {
			setCorrectAnswer(question.answer)
			setSelectedAnswer(selected)
			if (selected === question.answer) {
				event.target.parentElement.classList.add(QuizClasses.success)
				setMarks(marks + 5)
			} else {
				event.target.parentElement.classList.add(QuizClasses.danger)
			}
		}
	}

	// Next question
	const nextQuestionHandler = () => {
		setCorrectAnswer('')
		setSelectedAnswer('')
		setQuestionIndex(questionIndex + 1)
		clearOptions()
	}

	// Clear Options
	const clearOptions = () => {
		const wrongOption = document.querySelector(`.${QuizClasses.danger}`)
		if (wrongOption) {
			wrongOption.classList.remove(QuizClasses.danger)
		}
		const rightOption = document.querySelector(`.${QuizClasses.success}`)
		if (rightOption) {
			rightOption.classList.remove(QuizClasses.success)
		}
	}

	// Show result
	const showResultHandler = () => {
		setShowResult(true)
		setShowQuiz(false)
	}

	// Reset quiz
	const resetQuizHandler = () => {
		setShowQuiz(true)
		setShowResult(false)
		setQuestionIndex(0)
		setCorrectAnswer('')
		setSelectedAnswer('')
		setMarks(0)
		clearOptions()
	}

	return (
		<div className={classes.wrapper}>
			{showStartQuiz && <StartQuiz onClick={startQuizHandler} />}
			{showQuiz && (
				<Quiz
					quizs={quizs}
					question={question}
					questionIndex={questionIndex}
					checkAnswer={checkAnswerHandler}
					correctAnswer={correctAnswer}
					selectedAnswer={selectedAnswer}
					nextQuestion={nextQuestionHandler}
					showResult={showResultHandler}
					resetQuiz={resetQuizHandler}
				/>
			)}
			{showResult && (
				<QuizResult
					quizs={quizs}
					marks={marks}
					resetQuiz={resetQuizHandler}
				/>
			)}
		</div>
	)
}

export default App
