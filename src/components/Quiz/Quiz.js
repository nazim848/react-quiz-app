import classes from '../../styles/Quiz/Quiz.module.css'
import Button from '../UI/Button'

const Quiz = (props) => {
	return (
		<div className={classes.quiz}>
			<div className={classes['count']}>
				Question{' '}
				<span className={classes['current-question']}>
					{props.quizs.indexOf(props.question) + 1}
				</span>{' '}
				<span className={classes['total-question']}>
					/{props.quizs.length}
				</span>
			</div>
			<h2 className={classes.question}>{props.question.question}</h2>
			<div className={classes.options}>
				{props.question.options.map((content, index) => {
					return (
						<label
							key={index}
							className={`${classes.label} ${
								props.correctAnswer === content && classes.success
							} `}
						>
							{content}
							<input
								onClick={(event) => props.checkAnswer(event, content)}
								type="radio"
								name="option"
							/>
							<span className={classes.radio}></span>
						</label>
					)
				})}
			</div>
			{props.questionIndex + 1 !== props.quizs.length && (
				<Button
					onClick={props.nextQuestion}
					disabled={!props.selectedAnswer}
				>
					Next
				</Button>
			)}

			{props.questionIndex + 1 === props.quizs.length && (
				<Button onClick={props.showResult} disabled={!props.selectedAnswer}>
					Show Result
				</Button>
			)}

			<Button onClick={props.resetQuiz} reset>
				Reset
			</Button>
		</div>
	)
}

export default Quiz
