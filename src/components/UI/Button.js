import classes from '../../styles/UI/Button.module.css'

const Button = (props) => {
	return (
		<button
			type={props.type || 'button'}
			className={`${classes.btn} ${props.reset ? classes.reset : ''}`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}

export default Button
