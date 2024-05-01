import './button.module.css';

function Button({type, text}){
	return(
		<button type={type ? type : "button"}>{text}</button>

		)
}
export default Button;