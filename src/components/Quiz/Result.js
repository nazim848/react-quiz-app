import Button from '../UI/Button'
import classes from '../../styles/Quiz/Result.module.css'

const Result = (props) => {
	return (
		<div className={classes.result}>
			<h1 className={classes.title}>
				Your score is {props.marks} out of {props.quizs.length * 5}
			</h1>
			<Button onClick={props.resetQuiz}>Start Over</Button>
		</div>
	)
}

export default Result
