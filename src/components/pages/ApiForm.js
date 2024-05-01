export default {
	enviar: async (nome, email, msg) =>{
		const contato = {
		    "nome" : "douglas",
			"email" : "pedro",
			"msg" : "msg"}
		
		await fetch('http://localhost:8080/projetos/php/contato.php',{
		        method: 'POST',
		        headers: {
		        'Content-Type' : 'application/json'
		        },body: JSON.stringify(contato)
		}).then((resp) => resp.json()).then((data) => {
			console.log(data);
		}).catch(err => console.log(err))

	}
}
