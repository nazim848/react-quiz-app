import Button from '../UI/Button'
import classes from '../../styles/Quiz/Start.module.css'

const Start = (props) => {
	return (
		<div className={classes['start-quiz']}>
			<h1 className={classes.title}>Ready to start React quiz?</h1>
			<Button onClick={props.onClick}>Yes, Start Quiz!</Button>
		</div>
	)
}

export default Start
