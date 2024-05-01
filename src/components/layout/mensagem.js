import styles from './mensagem.module.css';

function Mensagem({txt, value, subTxt}){
	return(
		<div className={`${styles.msgBoxe}`}>
			<h1>{txt}</h1>	
            <p>{subTxt}</p>
		</div>

		)
}

export default Mensagem;
